import React from 'react';
import QuizOptionButton from '../src/components/QuizOptionButton';
import Widget from '../src/components/Widget';
import BackButton from '../src/components/BackButton/index';
import QuizButton from '../src/components/QuizButton';

export default function Quiz() {
  return (
    <>
      <Widget>
        <Widget.Header>
          <BackButton />
          <h3>Pergunta 1 de 2</h3>
        </Widget.Header>
        <Widget.Content>
          <h2>Qual o nome da heroína da foto?</h2>
          <QuizOptionButton>Drow Ranger</QuizOptionButton>
          <QuizOptionButton>Mirana</QuizOptionButton>
          <QuizOptionButton>Death Prophet</QuizOptionButton>
          <QuizOptionButton>Queen of Pain</QuizOptionButton>
          <QuizButton>Confirmar</QuizButton>
        </Widget.Content>
      </Widget>
    </>
  );
}
