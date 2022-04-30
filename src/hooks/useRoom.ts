import { useEffect, useRef, useState } from 'react';

import { getDatabase, onValue, ref } from 'firebase/database';

import { useAuth } from './useAuth';

type FirebaseQuestionObject = {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, { authorId: string }>;
};

type FirebaseQuestions = Record<string, FirebaseQuestionObject>;

export type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

export function useRoom(roomId: string) {
  const { user } = useAuth();
  const isMounted = useRef(false);
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const db = getDatabase();
    const roomRef = ref(db, `rooms/${roomId}`);
    function getRoomQuestions() {
      return onValue(roomRef, (room) => {
        if (!room.exists()) return;
        const databaseRoom = room.val();
        const firebaseQuestions: FirebaseQuestions =
          databaseRoom.questions || [];
        const parsedQuestions = Object.entries(firebaseQuestions).map(
          ([key, value]) => {
            return {
              id: key,
              content: value.content,
              author: value.author,
              isAnswered: value.isAnswered,
              isHighlighted: value.isHighlighted,
              likeCount: Object.values(value.likes ?? {}).length,
              likeId: Object.entries(value.likes ?? {}).find(
                ([, like]) => like.authorId === user?.id
              )?.[0],
            };
          }
        );

        setTitle(databaseRoom.title);
        setQuestions(parsedQuestions);
      });
    }
    const unsubscribe = getRoomQuestions();

    return () => {
      unsubscribe();
    };
  }, [roomId, user?.id]);

  return { title, questions };
}
