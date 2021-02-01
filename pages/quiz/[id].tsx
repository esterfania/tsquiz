import React from 'react';
import QuizPage from '../../src/screens/Quiz';

export default function QuizSharedPage(props) {
  return <QuizPage externalQuestions={props.questions} />;
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Falha ao entregar os dados');
      })
      .then((res) => res);

    return {
      props: externDb,
    };
  } catch (err) {
    throw new Error(err);
  }
}
