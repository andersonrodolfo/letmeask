import styled from 'styled-components';

type ContainerProps = {
  theme: Record<string, unknown>;
  isOutlined?: boolean;
  small?: boolean;
};

export const Container = styled.button<ContainerProps>`
  ${({
    theme: {
      primaryColor,
      darkPrimaryColor,
      secondaryColor,
      buttonOutline,
      buttonFontColor,
    },
    isOutlined,
  }) =>
    isOutlined
      ? `
      background: ${buttonOutline};
      color: ${primaryColor};
      border: 1px solid ${primaryColor};

      &:not(:disabled):hover {
        color: ${secondaryColor};
        border: 1px solid ${darkPrimaryColor};
        box-shadow: inset 0 0 3px ${darkPrimaryColor};
      }
    `
      : `
      background: ${primaryColor};
      color: ${buttonFontColor};
      border: 0;

      &:not(:disabled):hover {
        background: ${darkPrimaryColor};
      }
    `}

  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ small }) => (small ? '40px' : '50px')};
  padding: 0 32px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  will-change: transform;

  img {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
