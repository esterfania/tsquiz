import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.a`
  width: 100%;
  background: rgba(33, 21, 54, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  padding: 10px 15px;
  margin-bottom: 8px;
  display: block;
  word-break: break-word;
  transition: all 0.3s ease 0s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
const QuizOptionButton = (props: any) => {
  const { children } = props;
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
export default QuizOptionButton;
