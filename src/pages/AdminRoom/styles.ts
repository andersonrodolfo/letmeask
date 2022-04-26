import styled from 'styled-components';

import { Questions as QuestionsComponent } from '../../components/Questions';

export const Container = styled.div``;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const Questions = styled(QuestionsComponent)`
  margin: 32px 0;
`;
