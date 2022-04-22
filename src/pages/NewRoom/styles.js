import styled from 'styled-components';

import { COLORS } from '../../styles/theme';
const { gray2, pink } = COLORS;

export const CreateANewRoom = styled.h2`
  font-size: 24px;
  margin: 64px 0 24px;
  font-family: 'Poppings', sans-serif;
`;

export const ExistingRoom = styled.p`
  font-size: 14px;
  color: ${gray2};
  margin-top: 16px;

  a {
    color: ${pink};
  }
`;
