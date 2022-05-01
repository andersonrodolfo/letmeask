import styled from 'styled-components';

export const Button = styled.button`
  stroke: ${({ theme }) => theme.svgStrokeColor};
  &:hover {
    svg path,
    svg circle {
      stroke: ${({ theme }) => theme.svgStrokeColorHover};
    }
  }
`;

export const DeleteButton = styled.button`
  stroke: ${({ theme }) => theme.svgStrokeColor};
  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.deleteQuestion};
    }
  }
`;

export const Icon = styled.img``;
