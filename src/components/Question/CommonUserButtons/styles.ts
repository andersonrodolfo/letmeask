import styled from 'styled-components';

type LikeProps = {
  liked?: string;
};

export const Like = styled.button<LikeProps>`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  color: ${({ liked, theme }) =>
    liked ? theme.likeButtonFontColor : theme.defaultFontColor};

  svg {
    path {
      fill: ${({ theme }) => theme.svgFillColor};
      stroke: ${({ liked, theme }) =>
        !liked ? theme.svgStrokeColor : theme.svgStrokeColorHover};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.likeButtonFontColorHover};

    svg path {
      fill: ${({ theme }) => theme.svgFillColorHover};
      stroke: ${({ theme }) => theme.svgStrokeColorHover};
    }
  }
`;
