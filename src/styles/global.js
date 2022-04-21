import { createGlobalStyle } from 'styled-components';

import { COLORS } from './theme';
const { lightGray, darkGray } = COLORS;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${lightGray};
    color: ${darkGray};
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;
