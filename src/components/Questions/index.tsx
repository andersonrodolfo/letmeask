import { QuestionObject } from '../../hooks/useRoom';
import {
  Container,
  Item,
  Content,
  Footer,
  Info,
  Avatar,
  Name,
  Buttons,
} from './styles';

type QuestionsProps = {
  questions: QuestionObject[];
};

export function Questions({ questions, ...rest }: QuestionsProps) {
  return (
    <Container {...rest}>
      {questions.map((question) => (
        <Item key={question.id}>
          <Content>{question.content}</Content>
          <Footer>
            <Info>
              <Avatar src={question.author.avatar} alt={question.author.name} />
              <Name>{question.author.name}</Name>
            </Info>
            <Buttons>asd</Buttons>
          </Footer>
        </Item>
      ))}
    </Container>
  );
}
