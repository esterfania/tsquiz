import React from 'react';
import QuizOptionButton from '../src/components/QuizOptionButton';
import Widget from '../src/components/Widget';
import BackButton from '../src/components/BackButton/index';
import QuizButton from '../src/components/QuizButton';
import db from '../db.json';

export default function Quiz() {
  enum ScreenStateEnum {
    LOADING,
    RESULT,
    QUIZ,
  }
  const [screenState, setScreenState] = React.useState(ScreenStateEnum.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(ScreenStateEnum.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(ScreenStateEnum.RESULT);
    }
  }
  return (
    <>
      {(screenState as ScreenStateEnum) === ScreenStateEnum.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
        />
      )}
      {(screenState as ScreenStateEnum) === ScreenStateEnum.LOADING && <LoadingWidget />}
      {(screenState as ScreenStateEnum) === ScreenStateEnum.RESULT && (
        <div>Você acertou X questões, parabéns!</div>
      )}
    </>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit }: any) {
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
        <form onSubmit={onSubmit}>
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
