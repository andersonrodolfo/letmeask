import { child, getDatabase, ref, remove, update } from 'firebase/database';

import answerImg from '../../../assets/images/answer.svg';
import checkImg from '../../../assets/images/check.svg';
import deleteImg from '../../../assets/images/delete.svg';
import { QuestionType } from '../../../hooks/useRoom';
import { Button, Icon } from './styles';

type CommonUserButtonsProps = {
  roomId: string | undefined;
  question: QuestionType;
};

export function AdminButtons({ roomId, question }: CommonUserButtonsProps) {
  const db = getDatabase();
  const path = `rooms/${roomId}/questions/${question.id}`;

  async function handleCheckQuestionAsAnswered() {
    await update(ref(db, path), { isAnswered: !question.isAnswered });
    await update(ref(db, path), { isHighlighted: false });
  }
  async function handleHighlightQuestion() {
    await update(ref(db, path), { isHighlighted: !question.isHighlighted });
    await update(ref(db, path), { isAnswered: false });
  }
  async function handleDeleteQuestion() {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?'))
      await remove(child(ref(db), path));
  }

  return (
    <>
      <Button type="button" onClick={handleCheckQuestionAsAnswered}>
        <Icon src={checkImg} alt="Marcar pergunta como respondida" />
      </Button>
      <Button type="button" onClick={handleHighlightQuestion}>
        <Icon src={answerImg} alt="Dar destaque à pergunta" />
      </Button>
      <Button type="button" onClick={handleDeleteQuestion}>
        <Icon src={deleteImg} alt="Remover pergunta" />
      </Button>
    </>
  );
}
