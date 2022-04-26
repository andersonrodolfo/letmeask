import { QuestionObject } from '../../hooks/useRoom';
import { Container, Title, TotalQuestions } from './styles';

type RoomTitleProps = {
  title?: string;
  questions: QuestionObject[];
};

export function RoomTitle({ title = '', questions = [] }: RoomTitleProps) {
  const length = questions.length;

  return (
    <Container>
      {title && <Title>Sala {title}</Title>}
      {!!length && (
        <TotalQuestions>{`${length} pergunta${
          length > 1 ? 's' : ''
        }`}</TotalQuestions>
      )}
    </Container>
  );
}
