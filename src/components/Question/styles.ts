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
      background: `${theme.$color12}`,
      border: `1px solid ${theme.$color12}`,
    };
  if (isHighlighted && !isAnswered)
    return {
      background: `${theme.$color11}`,
      border: `1px solid ${theme.$color1}`,
    };
  return {
    background: `${theme.$color5}`,
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
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  list-style: none;

  & + div {
    margin-top: 8px;
  }
`;

export const Content = styled.p`
  color: ${({ theme: { $color10 } }) => $color10};
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
  color: ${({ theme: { $color9, $color10 }, isHighlighted, isAnswered }) => {
    if (isAnswered) return $color9;
    if (isHighlighted && !isAnswered) return $color10;
    return $color9;
  }};
  font-size: 14px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;
