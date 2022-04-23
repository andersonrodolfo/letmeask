import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme: { $color6 } }) => $color6};
    color: ${({ theme: { $color10 } }) => $color10};
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;
