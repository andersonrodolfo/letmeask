import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  child,
  getDatabase,
  push,
  ref,
  update,
  onValue,
} from 'firebase/database';

import logoImg from '../../assets/images/logo.svg';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import {
  Container,
  Header,
  Content,
  Logo,
  Main,
  RoomTitle,
  Title,
  TotalQuestions,
  Form,
  TextArea,
  Footer,
  UserInfo,
  Avatar,
  Name,
  Info,
  Login,
  SendQuestionButton,
} from './styles';

type QuestionObject = {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

type FirebaseQuestions = Record<string, QuestionObject>;

type Question = {
  id: string;
} & QuestionObject;

type RoomParams = {
  id: string;
};

export function Room() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id: roomId } = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');
  const isMounted = useRef(false);

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

  function handleChangeEvent(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setNewQuestion(value);
  }

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();
    if (newQuestion.trim() === '') return;
    if (!user) throw new Error('You must be logged in');

    const { name, avatar } = user;
    const question = {
      content: newQuestion,
      author: { name, avatar },
      isHighlighted: false,
      isAnswered: false,
    };

    const db = getDatabase();
    const questionsPath = `/rooms/${roomId}/questions`;
    const firebaseQuestionKey = push(child(ref(db), questionsPath)).key;
    await update(ref(db), {
      [`${questionsPath}/${firebaseQuestionKey}`]: question,
    });

    setNewQuestion('');
  }

  function goHome() {
    navigate('/');
  }

  return (
    <Container>
      <Header>
        <Content>
          <Logo onClick={goHome} src={logoImg} alt="Letmeask" />
          {roomId && <RoomCode code={roomId} />}
        </Content>
      </Header>
      <Main>
        <RoomTitle>
          {title && <Title>Sala {title}</Title>}
          {!!questions.length && (
            <TotalQuestions>{`${questions.length} pergunta${
              questions.length > 1 ? 's' : ''
            }`}</TotalQuestions>
          )}
        </RoomTitle>
        <Form onSubmit={handleSendQuestion}>
          <TextArea
            placeholder="O que você quer perguntar?"
            onChange={handleChangeEvent}
            value={newQuestion}
          />
          <Footer>
            {user ? (
              <UserInfo>
                <Avatar src={user.avatar} alt={user.name} />
                <Name>{user.name}</Name>
              </UserInfo>
            ) : (
              <Info>
                Para enviar uma pergunta,{' '}
                <Login type="button">faça seu login</Login>.
              </Info>
            )}
            <SendQuestionButton type="submit" disabled={!user || !newQuestion}>
              Enviar pergunta
            </SendQuestionButton>
          </Footer>
        </Form>
      </Main>
    </Container>
  );
}
