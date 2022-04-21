import googleIconImg from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
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
          <ButtonCreateRoom>
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>
          <Separator>ou entre em uma sala</Separator>
          <Form>
            <Input type="text" placeholder="Digite o código da sala" />
            <ButtonSubmit type="submit">Entrar na sala</ButtonSubmit>
          </Form>
        </MainContent>
      </Main>
    </Container>
  );
}
