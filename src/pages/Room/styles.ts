import styled from 'styled-components';

import { Button } from '../../components/Button';

export const Container = styled.div``;

export const Main = styled.main`
  max-width: 848px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Form = styled.form``;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  padding: 16px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
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
  color: ${({ theme }) => theme.highlightFontColor};
  font-weight: 500;
  font-size: 14px;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.defaultFontColor};
  font-weight: 500;
  font-size: 14px;
`;

export const Login = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const SendQuestionButton = styled(Button)``;

export const Questions = styled.div`
  margin: 32px 0;
`;
