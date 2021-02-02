import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: rgba(78, 44, 135, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-top: 10px;
  color: white;
  cursor: pointer;
  outline: none;
  margin-top: 25px;
  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease 0s;
  }
  &:disabled {
    background: rgba(94, 94, 94, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    opacity: 1;
    outline: none;
    cursor: no-drop;
  }
`;

const QuizButton = (props) => {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
};
export default QuizButton;
