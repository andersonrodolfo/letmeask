import styled from 'styled-components';

import { Button } from '../../components/Button';

export const ButtonCreateRoom = styled(Button)`
  margin-top: 64px;
  background: ${({ theme: { $color3 } }) => $color3};
`;

export const Separator = styled.p`
  display: flex;
  align-items: center;
  margin: 32px 0;
  color: ${({ theme: { $color8 } }) => $color8};
  font-size: 14px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme: { $color8 } }) => $color8};
  }

  &::before {
    margin-right: 16px;
  }

  &::after {
    margin-left: 16px;
  }
`;
