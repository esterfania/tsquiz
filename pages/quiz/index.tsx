import React from 'react';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

export default function QuizDaGaleraPage() {
  return <QuizScreen externalQuestions={db.questions} />;
}
