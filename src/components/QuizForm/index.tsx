import React, { FormEvent } from 'react';
import { useRouter } from 'next/router';
import QuizButton from '../QuizButton';
import QuizInput from '../QuizInput';

function QuizForm() {
  const [name, setName] = React.useState('');
  const router = useRouter();

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    setName(input.value);
  };

  return (
    <form onSubmit={handleForm}>
      <QuizInput onChange={handleInput} placeholder="Diz aí seu nome" />
      <QuizButton disabled={name.length === 0}>JOGAR</QuizButton>
    </form>
  );
}

export default QuizForm;
