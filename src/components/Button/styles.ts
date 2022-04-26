import styled from 'styled-components';

type ContainerProps = {
  isOutlined?: boolean;
  theme: Record<string, unknown>;
};

export const Container = styled.button<ContainerProps>`
  ${({ theme: { $color1, $color4 }, isOutlined }) =>
    isOutlined
      ? `
      background: ${$color4};
      color: ${$color1};
      border: 1px solid ${$color1};
    `
      : `
      background: ${$color1};
      color: ${$color4};
      border: 0;
    `}

  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 32px;
  border-radius: 8px;
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
