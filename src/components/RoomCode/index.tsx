import copyImg from '../../assets/images/copy.svg';
import { Container, ImageWrapper, Image, Info, Code } from './styles';

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <Container type="button" onClick={copyRoomCodeToClipboard}>
      <ImageWrapper>
        <Image src={copyImg} alt="Copy room code" />
      </ImageWrapper>
      <Info>
        Sala #<Code>{code}</Code>
      </Info>
    </Container>
  );
}
