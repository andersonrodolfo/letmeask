import styled from 'styled-components';

import { Button } from '../../components/Button';

export const ButtonCreateRoom = styled(Button)`
  margin-top: 64px;
  background: ${({ theme }) => theme.googleButtonBackground};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.googleButtonBackgroundHover};
  }
`;

export const Separator = styled.p`
  display: flex;
  align-items: center;
  margin: 32px 0;
  color: ${({ theme }) => theme.separator};
  font-size: 14px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.separator};
  }

  &::before {
    margin-right: 16px;
  }

  &::after {
    margin-left: 16px;
  }
`;
