import styled from 'styled-components';

import { Button as ButtonComponent } from '../Button';

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.headerBorderColor};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Logo = styled.img.attrs((props) => ({ src: props.theme.logo }))`
  max-height: 45px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled(ButtonComponent)``;
