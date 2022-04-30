import styled from 'styled-components';

import { Button } from '../../components/Button';

export const Container = styled.div``;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const Form = styled.form``;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  padding: 16px;
  border: 0;
  border-radius: 8px;
  background: ${({ theme: { $color5 } }) => $color5};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-left: 8px;
  color: ${({ theme: { $color10 } }) => $color10};
  font-weight: 500;
  font-size: 14px;
`;

export const Info = styled.p`
  color: ${({ theme: { $color9 } }) => $color9};
  font-weight: 500;
  font-size: 14px;
`;

export const Login = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme: { $color1 } }) => $color1};
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme: { $color2 } }) => $color2};
  }
`;

export const SendQuestionButton = styled(Button)``;

export const Questions = styled.div`
  margin: 32px 0;
`;
