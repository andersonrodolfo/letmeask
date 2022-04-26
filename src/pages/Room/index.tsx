import { ChangeEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { child, getDatabase, push, ref, update } from 'firebase/database';

import { RoomHeader } from '../../components/RoomHeader';
import { RoomTitle } from '../../components/RoomTitle';
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import {
  Container,
  Main,
  Form,
  TextArea,
  Footer,
  UserInfo,
  Avatar,
  Name,
  Info,
  Login,
  SendQuestionButton,
  Questions,
} from './styles';

type RoomParams = {
  id: string;
};

export function Room() {
  const { user } = useAuth();
  const { id: roomId = '' } = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const { title, questions } = useRoom(roomId);

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
    const { key } = push(child(ref(db), questionsPath));
    await update(ref(db), {
      [`${questionsPath}/${key}`]: question,
    });

    setNewQuestion('');
  }

  return (
    <Container>
      <RoomHeader roomId={roomId} />
      <Main>
        <RoomTitle title={title} questions={questions} />
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
        <Questions questions={questions} />
      </Main>
    </Container>
  );
}
