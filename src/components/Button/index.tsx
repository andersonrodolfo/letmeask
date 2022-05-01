import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  small?: boolean;
};

export function Button({
  isOutlined = false,
  small = false,
  ...rest
}: ButtonProps) {
  return (
    <Container type="button" isOutlined={isOutlined} small={small} {...rest} />
  );
}
