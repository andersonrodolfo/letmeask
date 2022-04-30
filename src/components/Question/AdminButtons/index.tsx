import { child, getDatabase, ref, remove } from 'firebase/database';

import deleteImg from '../../../assets/images/delete.svg';
import { QuestionType } from '../../../hooks/useRoom';
import { DeleteButton, Icon } from './styles';

type CommonUserButtonsProps = {
  roomId: string | undefined;
  question: QuestionType;
};

export function AdminButtons({ roomId, question }: CommonUserButtonsProps) {
  async function handleDeleteButton() {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      const db = getDatabase();
      const path = `rooms/${roomId}/questions/${question.id}`;
      await remove(child(ref(db), path));
    }
  }

  return (
    <DeleteButton type="button" onClick={handleDeleteButton}>
      <Icon src={deleteImg} alt="Remover pergunta" />
    </DeleteButton>
  );
}
