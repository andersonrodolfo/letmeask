import styled from 'styled-components';

import { COLORS } from '../../styles/theme';
const { mainColor } = COLORS;

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 64px;
  padding: 0 32px;
  border: 0;
  border-radius: 8px;
  background: ${mainColor};
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  img {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`;
