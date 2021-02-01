import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import db from '../db.json';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const { theme } = db;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <QuizHeader props={db} />
        <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
            <QuizLogo /> */}
        <GlobalStyle />
        <Component {...pageProps} />
        {/* 
            <Footer />
          </QuizContainer>
          <GitHubCorner projectUrl="https://github.com/esterfania/tsquiz" />
        </QuizBackground> */}
      </ThemeProvider>
    </>
  );
}
