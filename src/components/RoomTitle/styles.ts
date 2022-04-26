import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 24px;
`;

export const Title = styled.h1`
  color: ${({ theme: { $color10 } }) => $color10};
  font-size: 24px;
  font-family: 'Poppings', sans-serif;
`;

export const TotalQuestions = styled.span`
  margin-left: 16px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: ${({ theme: { $color2 } }) => $color2};
  color: ${({ theme: { $color4 } }) => $color4};
  font-weight: 500;
  font-size: 14px;
`;
