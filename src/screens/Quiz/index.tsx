import React from 'react';
import BackButton from '../../components/BackButton';
import { LoadingWidget } from '../../components/LoadingWidget';
import { QuestionWidget } from '../../components/QuestionWidget';
import Widget from '../../components/Widget';

function QuizResult({ results }) {
  return (
    <Widget>
      <Widget.Header>
        {' '}
        <BackButton />
        Resultados
      </Widget.Header>

      <Widget.Content>
        <p>Você acertou {results.filter((x) => x).length} perguntas:</p>
        <ul>
          {results.map((item, index) => (
            <li key={index}>{`Questão ${index + 1}: ${item === true ? 'Acertou' : 'Errou'}`}</li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage({ externalQuestions, externalBg }) {
  enum ScreenStateEnum {
    LOADING,
    RESULT,
    QUIZ,
  }
  const [screenState, setScreenState] = React.useState(ScreenStateEnum.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const totalQuestions = externalQuestions.length;
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const [results, setResults] = React.useState([]);
  const bg = externalBg;

  function addResults(result: never) {
    setResults([...results, result]);
  }

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
          questionIndex={currentQuestion}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
          addResults={addResults}
        />
      )}
      {(screenState as ScreenStateEnum) === ScreenStateEnum.LOADING && <LoadingWidget />}
      {(screenState as ScreenStateEnum) === ScreenStateEnum.RESULT && (
        <QuizResult results={results} />
      )}
    </>
  );
}
