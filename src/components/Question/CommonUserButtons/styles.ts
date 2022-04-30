import styled from 'styled-components';

type LikeProps = {
  liked?: string;
};

export const Like = styled.button<LikeProps>`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  color: ${({ liked, theme: { $color9, $color1 } }) =>
    liked ? $color1 : $color9};
  transition: filter 0.2s ease-in-out;

  svg path {
    stroke: ${({ liked, theme: { $color1 } }) => liked && $color1};
  }

  &:hover {
    filter: brightness(0.7);
  }
`;
