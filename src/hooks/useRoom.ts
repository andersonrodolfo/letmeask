import { useEffect, useRef, useState } from 'react';

import { getDatabase, onValue, ref } from 'firebase/database';

export type QuestionObject = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

type FirebaseQuestions = Record<string, QuestionObject>;

export function useRoom(roomId: string) {
  const isMounted = useRef(false);
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<QuestionObject[]>([]);

  useEffect(() => {
    async function getRoomQuestions() {
      const db = getDatabase();
      const roomRef = ref(db, `rooms/${roomId}`);

      onValue(roomRef, (room) => {
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
            };
          }
        );

        setTitle(databaseRoom.title);
        setQuestions(parsedQuestions);
      });
    }

    if (isMounted.current) getRoomQuestions();
    else isMounted.current = true;
  }, [roomId]);

  return { title, questions };
}
