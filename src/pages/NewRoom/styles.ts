import styled from 'styled-components';

export const CreateNewRoomTitle = styled.h2`
  margin: 64px 0 24px;
  font-size: 24px;
  font-family: 'Poppings', sans-serif;
`;

export const ExistingRoom = styled.p`
  margin-top: 16px;
  color: ${({ theme: { $color9 } }) => $color9};
  font-size: 14px;

  a {
    color: ${({ theme: { $color2 } }) => $color2};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme: { $color1 } }) => $color1};
    }
  }
`;
