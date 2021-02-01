import React from 'react';

import db from '../db.json';
import QuizForm from '../src/components/QuizForm';
import QuizOptionButton from '../src/components/QuizOptionButton';
import Widget from '../src/components/Widget';
import QuizHeader from '../src/components/QuizHeader';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  return (
    <>
      <QuizHeader props={db} />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
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
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/esterfania/tsquiz" />
      </QuizBackground>
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
