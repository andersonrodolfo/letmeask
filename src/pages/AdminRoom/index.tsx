import { useParams } from 'react-router-dom';

import { RoomHeader } from '../../components/RoomHeader';
import { RoomTitle } from '../../components/RoomTitle';
import { useRoom } from '../../hooks/useRoom';
import { Container, Main, Questions } from './styles';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const { id: roomId = '' } = useParams<RoomParams>();
  const { title, questions } = useRoom(roomId);

  return (
    <Container>
      <RoomHeader roomId={roomId} />
      <Main>
        <RoomTitle title={title} questions={questions} />
        <Questions questions={questions} />
      </Main>
    </Container>
  );
}
