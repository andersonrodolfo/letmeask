import { FormEvent, ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getDatabase, ref, child, update, push } from 'firebase/database';

import { PageColumns } from '../../components/PageColumns';
import { ButtonSubmit, Form, Input } from '../../components/PageColumns/styles';
import { useAuth } from '../../hooks/useAuth';
import { CreateNewRoomTitle, ExistingRoom } from './styles';

export function NewRoom() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();

    if (newRoom.trim() === '') return;

    const db = getDatabase();
    const { key } = push(child(ref(db), 'rooms'));
    await update(ref(db), {
      [`/rooms/${key}`]: {
        authorId: user?.id,
        title: newRoom,
      },
    });
    navigate(`/rooms/${key}`);
  }

  function handleChangeEvent(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setNewRoom(value);
  }

  return (
    <PageColumns>
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
    </PageColumns>
  );
}
