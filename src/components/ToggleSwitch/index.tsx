import { ChangeEvent, useState } from 'react';

import { Container, Input, Switch } from './styles';

type ToggleSwitchProps = {
  label?: string;
  containerProps?: Record<string, unknown>;
  callback?: unknown;
  isChecked?: boolean;
};

export function ToggleSwitch({
  label,
  callback,
  isChecked = false,
  ...rest
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (typeof callback === 'function') callback();
  };

  return (
    <Container {...rest}>
      {label && <span>{label}</span>}
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Container>
  );
}
