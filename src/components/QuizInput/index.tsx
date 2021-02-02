import styled from 'styled-components';
import React, { useCallback } from 'react';

const Input = styled.input`
  width: 100%;
  height: 38px;
  font-size: 15px;
  color: white;
  padding: 10px;
  outline: 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  background-color: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.light};
  }
`;
const QuizInput = (props) => {
  const callbackRef = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  return <Input {...props} ref={callbackRef} />;
};

export default QuizInput;
