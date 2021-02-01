import React from 'react';
import { fileURLToPath } from 'url';

import db from '../db.json';
import QuizForm from '../src/components/QuizForm';
import QuizOptionButton from '../src/components/QuizOptionButton';
import Widget from '../src/components/Widget';

export default function Home() {
  return (
    <>
      <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{db.description}</p>
          <QuizForm />
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Content>
          <ExternalQuizList list={db.external}></ExternalQuizList>
        </Widget.Content>
      </Widget>
    </>
  );
}
function ExternalQuizList({ list }) {
  return (
    <>
      <h1>Quizes da galera</h1>
      <ul>
        {list.map((url: string) => {
          const prepareUrl = url
            .replace(/\//g, '')
            .replace('https:', '')
            .replace('.vercel.app', '');
          const [repoName] = prepareUrl.split('.');
          return (
            <QuizOptionButton as="a" key={url} href={url} target="_blank">
              {`${repoName}`}
            </QuizOptionButton>
          );
        })}
      </ul>
    </>
  );
}
