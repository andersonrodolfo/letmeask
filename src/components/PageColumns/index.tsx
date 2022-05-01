import { ReactNode } from 'react';

import illustrationImg from '../../assets/images/illustration.svg';
import {
  Container,
  Aside,
  Illustration,
  Highlight,
  Info,
  Main,
  MainContent,
  Logo,
} from './styles';

type ContentProps = {
  children: ReactNode;
};

export function PageColumns({ children }: ContentProps) {
  return (
    <Container>
      <Aside>
        <Illustration
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <Highlight>Crie salas de Q&amp;A ao-vivo</Highlight>
        <Info>Tire as dúvidas da sua audiência em tempo-real</Info>
      </Aside>
      <Main>
        <MainContent>
          <Logo alt="Letmeask" />
          {children}
        </MainContent>
      </Main>
    </Container>
  );
}
