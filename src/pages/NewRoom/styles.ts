import styled from 'styled-components';

export const CreateNewRoomTitle = styled.h2`
  margin: 64px 0 24px;
  color: ${({ theme }) => theme.highlightFontColor};
  font-size: 24px;
  font-family: 'Poppings', sans-serif;
`;

export const ExistingRoom = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.defaultFontColor};
  font-size: 14px;

  a {
    color: ${({ theme }) => theme.linkColor};

    &:hover {
      color: ${({ theme }) => theme.linkColorHover};
    }
  }
`;
