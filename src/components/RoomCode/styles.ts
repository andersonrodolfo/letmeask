import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  overflow: hidden;
  height: 40px;
  border: 1px solid ${({ theme: { $color1 } }) => $color1};
  border-radius: 8px;
  background: ${({ theme: { $color4 } }) => $color4};
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    filter: brightness(0.92);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 12px;
  background-color: ${({ theme: { $color1 } }) => $color1};
`;

export const Image = styled.img``;

export const Info = styled.p`
  flex: 1;
  align-self: center;
  overflow: hidden;
  max-width: 300px;
  padding: 0 16px 0 12px;
  font-weight: 500;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Code = styled.span`
  color: ${({ theme: { $color1 } }) => $color1};
`;
