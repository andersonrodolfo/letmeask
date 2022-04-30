import { User } from '../../contexts/AuthContext';
import { QuestionType } from '../../hooks/useRoom';
import { AdminButtons } from './AdminButtons';
import { CommonUserButtons } from './CommonUserButtons';
import {
  Container,
  Content,
  Footer,
  Info,
  Avatar,
  Name,
  Buttons,
} from './styles';

type QuestionsProps = {
  isAdmin?: boolean;
  user?: User;
  roomId?: string;
  question: QuestionType;
};

export function Question({
  isAdmin = false,
  user,
  roomId,
  question,
  ...rest
}: QuestionsProps) {
  const {
    content,
    author: { avatar, name },
  } = question;
  return (
    <Container {...rest}>
      <Content>{content}</Content>
      <Footer>
        <Info>
          <Avatar src={avatar} alt={name} />
          <Name>{name}</Name>
        </Info>
        <Buttons>
          {isAdmin ? (
            <AdminButtons roomId={roomId} question={question} />
          ) : (
            <CommonUserButtons
              user={user}
              roomId={roomId}
              question={question}
            />
          )}
        </Buttons>
      </Footer>
    </Container>
  );
}
