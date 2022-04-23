import { FormEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDatabase, ref, child, get } from 'firebase/database';

import googleIconImg from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import { useAuth } from '../../hooks/useAuth';
import {
  Container,
  Aside,
  Main,
  MainContent,
  Logo,
  ButtonCreateRoom,
  Separator,
  Form,
  Input,
  ButtonSubmit,
} from './styles';

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) await signInWithGoogle();
    navigate('/rooms/new');
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault();
    if (roomCode.trim() === '') return;

    const dbRef = ref(getDatabase());
    const roomRef = await get(child(dbRef, `rooms/${roomCode}`));

    if (!roomRef.exists()) return alert('Room does not exists');

    navigate(`/rooms/${roomCode}`);
  }

  function handleChangeEvent(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setRoomCode(value);
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
          <ButtonCreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>
          <Separator>ou entre em uma sala</Separator>
          <Form onSubmit={handleJoinRoom}>
            <Input
              type="text"
              placeholder="Digite o código da sala"
              onChange={handleChangeEvent}
              value={roomCode}
            />
            <ButtonSubmit disabled={!roomCode} type="submit">
              Entrar na sala
            </ButtonSubmit>
          </Form>
        </MainContent>
      </Main>
    </Container>
  );
}
