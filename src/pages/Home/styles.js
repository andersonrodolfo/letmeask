import styled from 'styled-components';

import { Button } from '../../components/Button';
import { COLORS } from '../../styles/theme';
const { mainColor, lightGray, gray } = COLORS;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.div`
  display: flex;
  flex: 7;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;
  background: ${mainColor};
  color: #fff;

  img {
    max-width: 320px;
  }

  strong {
    margin-top: 16px;
    font: 700 36px 'Poppings', sans-serif;
    line-height: 42px;
  }

  p {
    margin-top: 16px;
    color: ${lightGray};
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex: 8;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

export const Logo = styled.img`
  align-self: center;
`;

export const ButtonCreateRoom = styled(Button)`
  background: #ea4335;
`;

export const Separator = styled.p`
  display: flex;
  align-items: center;
  margin: 32px 0;
  color: ${gray};
  font-size: 14px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${gray};
  }

  &::before {
    margin-right: 16px;
  }

  &::after {
    margin-left: 16px;
  }
`;

export const Form = styled.form`
  button {
    margin-top: 16px;
  }

  button,
  input {
    width: 100%;
  }
`;

export const Input = styled.input`
  height: 50px;
  padding: 0 16px;
  border: 1px solid ${gray};
  border-radius: 8px;
  background: #fff;
`;

export const ButtonSubmit = styled(Button)``;
