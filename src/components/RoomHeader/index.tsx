import { useNavigate } from 'react-router-dom';

import { getAuth, signOut } from 'firebase/auth';
import { getDatabase, ref, update } from 'firebase/database';

import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { Header, Content, Logo, Wrapper, Button } from './styles';

type RoomHeaderProps = {
  isAdmin?: boolean;
  roomId: string;
};

export function RoomHeader({ isAdmin = false, roomId }: RoomHeaderProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  async function handleEndRoom() {
    const db = getDatabase();
    await update(ref(db, `/rooms/${roomId}`), { closedAt: new Date() });
    goHome();
  }

  async function handleSignOut() {
    const auth = getAuth();
    await signOut(auth);
    goHome();
  }

  return (
    <Header>
      <Content>
        <Logo onClick={goHome} alt="Letmeask" />
        <Wrapper>
          {roomId && <RoomCode code={roomId} />}
          {isAdmin && (
            <Button type="button" small isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          )}
          {user && (
            <Button type="button" small isOutlined onClick={handleSignOut}>
              Sair
            </Button>
          )}
        </Wrapper>
      </Content>
    </Header>
  );
}
