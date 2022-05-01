import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.primaryColor};
`;

export const Code = styled.span`
  color: ${({ theme }) => theme.headerCodeColor};
`;

export const Container = styled.button`
  display: flex;
  overflow: hidden;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.defaultBackground};
  cursor: pointer;
  will-change: transform;

  &:hover {
    border: 1px solid ${({ theme }) => theme.darkPrimaryColor};
    box-shadow: inset 0 0 3px ${({ theme }) => theme.darkPrimaryColor};
    ${ImageWrapper} {
      background-color: ${({ theme }) => theme.darkPrimaryColor};
    }
    ${Code} {
      color: ${({ theme }) => theme.headerCodeColorHover};
    }
  }
`;

export const Image = styled.img``;

export const Info = styled.p`
  flex: 1;
  align-self: center;
  overflow: hidden;
  max-width: 300px;
  padding: 0 16px 0 12px;
  font-weight: 500;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.defaultFontColor};
`;
