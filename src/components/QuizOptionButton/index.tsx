import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 4px;
  background-color: #232749;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-style: none;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease 0s;
  }
  &:disabled {
    background-color: #505050;
    outline: none;
    cursor: no-drop;
  }
`;
const QuizOptionButton = (props: any) => {
  const { children } = props;
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
export default QuizOptionButton;
