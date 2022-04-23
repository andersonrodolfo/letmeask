import styled from 'styled-components';

import { Button } from '../../components/Button';

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
  background: ${({ theme: { $color1 } }) => $color1};
  color: ${({ theme: { $color4 } }) => $color4};

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
    color: ${({ theme: { $color6 } }) => $color6};
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
  background: ${({ theme: { $color3 } }) => $color3};
  margin-top: 64px;
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
  border: 1px solid ${({ theme: { $color8 } }) => $color8};
  border-radius: 8px;
  background: ${({ theme: { $color4 } }) => $color4};
`;

export const ButtonSubmit = styled(Button)``;
