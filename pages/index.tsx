import React from 'react';

import db from '../db.json';
import QuizForm from '../src/components/QuizForm';
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
          <h1>Quizes da galera</h1>
          <p>{db.description}</p>
        </Widget.Content>
      </Widget>
    </>
  );
}
