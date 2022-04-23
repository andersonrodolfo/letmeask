import { FormEvent, ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getDatabase, ref, child, update, push } from 'firebase/database';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import { useAuth } from '../../hooks/useAuth';
import {
  Aside,
  ButtonSubmit,
  Container,
  Form,
  Input,
  Logo,
  Main,
  MainContent,
} from '../Home/styles';
import { CreateNewRoomTitle, ExistingRoom } from './styles';

export function NewRoom() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();

    if (newRoom.trim() === '') return;

    const db = getDatabase();
    const firebaseRoomKey = push(child(ref(db), 'rooms')).key;
    await update(ref(db), {
      [`/rooms/${firebaseRoomKey}`]: {
        authorId: user?.id,
        title: newRoom,
      },
    });

    navigate(`/rooms/${firebaseRoomKey}`);
  }

  function handleChangeEvent(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setNewRoom(value);
  }

  return (
    <Container>
      <Aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>
      <Main>
        <MainContent>
          <Logo src={logoImg} alt="Letmeask" />
          <CreateNewRoomTitle>Crie uma nova sala</CreateNewRoomTitle>
          <Form onSubmit={handleCreateRoom}>
            <Input
              type="text"
              placeholder="Nome da sala"
              onChange={handleChangeEvent}
              value={newRoom}
            />
            <ButtonSubmit disabled={!newRoom} type="submit">
              Criar sala
            </ButtonSubmit>
          </Form>
          <ExistingRoom>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </ExistingRoom>
        </MainContent>
      </Main>
    </Container>
  );
}
