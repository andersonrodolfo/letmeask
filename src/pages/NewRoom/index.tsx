import { Link } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
// import { useAuth } from '../../hooks/useAuth';
import {
  Container,
  Aside,
  Main,
  MainContent,
  Logo,
  Form,
  Input,
  ButtonSubmit,
} from '../Home/styles';
import { CreateANewRoom, ExistingRoom } from './styles';

export function NewRoom() {
  // const { user } = useAuth();

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
          <CreateANewRoom>Crie uma nova sala</CreateANewRoom>
          <Form>
            <Input type="text" placeholder="Nome da sala" />
            <ButtonSubmit type="submit">Criar sala</ButtonSubmit>
          </Form>
          <ExistingRoom>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </ExistingRoom>
        </MainContent>
      </Main>
    </Container>
  );
}
