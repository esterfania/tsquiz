import React from 'react';

import db from '../db.json';
import { LoadingWidget } from '../src/components/LoadingWidget';
import { QuestionWidget } from '../src/components/QuestionWidget';

export default function QuizPage() {
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

  //[React call: Effects]
  // didMount
  // willUpdate
  // willUnmount

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(ScreenStateEnum.QUIZ);
    }, 1000);
  }, [ScreenStateEnum.QUIZ]);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
      }, 1000);
    } else {
      setTimeout(() => {
        setScreenState(ScreenStateEnum.RESULT);
      }, 1000);
    }
  }
  return (
    <>
      {(screenState as ScreenStateEnum) === ScreenStateEnum.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={currentQuestion}
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
