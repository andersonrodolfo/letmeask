import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 24px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.highlightFontColor};
  font-size: 24px;
  font-family: 'Poppings', sans-serif;
`;

export const TotalQuestions = styled.span`
  margin-left: 16px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.totalQuestionsFontColor};
  font-weight: 500;
  font-size: 14px;
`;
