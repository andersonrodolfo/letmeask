import styled from 'styled-components';

type ContainerProps = {
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

type Themes = {
  theme: Record<string, string>;
};

function handleStyles({
  theme,
  isAnswered,
  isHighlighted,
}: Themes & ContainerProps) {
  if (isAnswered)
    return {
      background: `${theme.isQuestionAnswered}`,
      border: `1px solid ${theme.isQuestionAnswered}`,
    };
  if (isHighlighted && !isAnswered)
    return {
      background: `${theme.isQuestionHighlighted}`,
      border: `1px solid ${theme.primaryColor}`,
    };
  return {
    background: `${theme.defaultQuestionBackground}`,
  };
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isAnswered, isHighlighted }) =>
    handleStyles({
      theme,
      isAnswered,
      isHighlighted,
    })}
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  list-style: none;

  & + div {
    margin-top: 8px;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.defaultQuestionFontColor};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Name = styled.p<ContainerProps>`
  margin-left: 8px;
  color: ${({ theme, isHighlighted, isAnswered }) => {
    if (isHighlighted && !isAnswered) return theme.highlightFontColor;
    return theme.defaultFontColor;
  }};
  font-size: 14px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;
