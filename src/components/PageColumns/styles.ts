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
  background: ${({ theme }) => theme.asideColumnBackground};
  color: ${({ theme }) => theme.asideColumnFontColor};
`;

export const Illustration = styled.img`
  max-width: 320px;
`;

export const Highlight = styled.h1`
  margin-top: 16px;
  font: 700 36px 'Poppings', sans-serif;
  line-height: 42px;
`;

export const Info = styled.p`
  margin-top: 16px;
  font-size: 24px;
  line-height: 32px;
`;

export const Main = styled.div`
  display: flex;
  flex: 8;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  background: ${({ theme }) => theme.mainColumnBackground};
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

export const Logo = styled.img.attrs((props) => ({ src: props.theme.logo }))`
  align-self: center;
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
  border-radius: 8px;
`;

export const ButtonSubmit = styled(Button)``;
