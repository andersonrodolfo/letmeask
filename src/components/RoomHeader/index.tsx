import { useNavigate } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import { RoomCode } from '../../components/RoomCode';
import { Header, Content, Logo, Wrapper, CloseRoom } from './styles';

type RoomHeaderProps = {
  isAdmin?: boolean;
  roomId: string;
};

export function RoomHeader({ isAdmin = false, roomId }: RoomHeaderProps) {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }
  return (
    <Header>
      <Content>
        <Logo onClick={goHome} src={logoImg} alt="Letmeask" />
        <Wrapper>
          {roomId && <RoomCode code={roomId} />}
          {isAdmin && <CloseRoom isOutlined>Encerrar sala</CloseRoom>}
        </Wrapper>
      </Content>
    </Header>
  );
}
