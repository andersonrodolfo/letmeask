import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 32px;
  border: 0;
  border-radius: 8px;
  background: ${({ theme: { $color1 } }) => $color1};
  color: ${({ theme: { $color4 } }) => $color4};
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s ease-in-out, opacity 0.2s ease-in-out;
  will-change: transform;

  img {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`;
