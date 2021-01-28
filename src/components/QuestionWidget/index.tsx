import React from 'react';
import QuizOptionButton from '../QuizOptionButton';
import Widget from '../Widget';
import BackButton from '../BackButton/index';
import QuizButton from '../QuizButton';

export function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <BackButton />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
        src={question.image}
      />
      <Widget.Content>
        <form
          onSubmit={(infos) => {
            infos.preventDefault();
            onSubmit();
          }}
        >
          <h2>{question.title}</h2>
          <p>{question.description}</p>
          {question.alternatives.map((item: string, index: number) => {
            const alternativeId = `${item}_${index}`;
            return (
              <QuizOptionButton key={index} as="label" htmlFor={alternativeId}>
                <input
                  key={index}
                  style={{ display: 'none' }}
                  type="radio"
                  name={questionId}
                  id={alternativeId}
                />
                {item}
              </QuizOptionButton>
            );
          })}
          <QuizButton type="submit">Confirmar</QuizButton>
        </form>
      </Widget.Content>
    </Widget>
  );
}
