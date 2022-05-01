import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  padding: 4px;
  border-radius: 32px;
  background: #b3b3b3;
  transition: 300ms all;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 4px;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    background: white;
    transition: 300ms all;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
