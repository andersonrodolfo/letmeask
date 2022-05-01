import styled, { createGlobalStyle } from 'styled-components';

import { ToggleSwitch } from '../components/ToggleSwitch';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: color 0.2s ease-in-out,
                background-color 0.2s ease-in-out,
                border-color 0.2s ease-in-out,
                box-shadow 0.2s ease-in-out,
                stroke 0.4s ease-in-out,
                fill 0.4s ease-in-out,
                box-shadow 0.2s ease-in-out,
                opacity 0.2s ease-in-out;
  }

  body {
    background: ${({ theme }) => theme.defaultBackground};
    color: ${({ theme }) => theme.defaultFontColor};
  }

  body,
  input,
  button,
  textarea {
    font: 400 14px 'Roboto', sans-serif;
  }

  input, textarea {
    border: 1px solid ${({ theme }) => theme.inputBorder};
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.inputFontColor};

    &::placeholder {
      color: ${({ theme }) => theme.inputPlaceholderColor};
    }
    
    &:focus {
      box-shadow: 0 0 3px ${({ theme }) => theme.defaultBoxShadow};
      outline: none;
    }
  }
`;

export const ToggleThemeMode = styled(ToggleSwitch)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
