import React from 'react';
import QuizOptionButton from '../QuizOptionButton';
import Widget from '../Widget';
import BackButton from '../BackButton/index';
import QuizButton from '../QuizButton';
import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected='true'] {
      background-color: ${({ theme }) => theme.colors.primary};

      &[data-status='SUCCESS'] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status='ERROR'] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    }
  }
  button {
    margin-top: 24px;
  }
`;

export function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit, addResults }) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = React.useState();
  const isCorrectAnswer = selectedAlternative === question.answer;
  const [isQuestionSubmited, setQuestionSubmited] = React.useState(false);
  const hasAlternativeSelected = selectedAlternative != undefined;
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
        <AlternativesForm
          onSubmit={(infos) => {
            infos.preventDefault();
            setQuestionSubmited(true);
            setTimeout(() => {
              addResults(isCorrectAnswer);
              setQuestionSubmited(false);
              setSelectedAlternative(undefined);
              onSubmit();
            }, 3000);
          }}
        >
          <h2>{question.title}</h2>
          <p>{question.description}</p>
          {question.alternatives.map((item, index) => {
            const alternativeId = `${item}_${index}`;
            const alternativeStatus = isCorrectAnswer ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <QuizOptionButton
                key={index}
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  key={index}
                  style={{ display: 'none' }}
                  type="radio"
                  name={questionId}
                  id={alternativeId}
                  onChange={() => setSelectedAlternative(index)}
                />
                {item}
              </QuizOptionButton>
            );
          })}
          <QuizButton type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </QuizButton>
          {/* {isQuestionSubmited && isCorrectAnswer && <p>Acertou</p>}
          {isQuestionSubmited && !isCorrectAnswer && <p>Errou</p>} */}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
