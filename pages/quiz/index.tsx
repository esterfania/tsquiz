import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';
import QuizHeader from '../../src/components/QuizHeader';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import QuizLogo from '../../src/components/QuizLogo';
import Footer from '../../src/components/Footer';
import GitHubCorner from '../../src/components/GitHubCorner';

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizHeader props={db} />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <QuizScreen externalQuestions={db.questions} externalBg={db.bg} />
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/esterfania/tsquiz" />
      </QuizBackground>
    </ThemeProvider>
  );
}
