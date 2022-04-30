import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme: { $color5 } }) => $color5};
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

export const Name = styled.p`
  margin-left: 8px;
  color: ${({ theme: { $color9 } }) => $color9};
  font-size: 14px;
`;

export const Buttons = styled.div`
  display: flex;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;
