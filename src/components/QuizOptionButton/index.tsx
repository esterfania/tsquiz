import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.a`
  width: 100%;
  border-radius: 4px;
  background-color: #232749;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-style: none;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  padding: 10px 15px;
  margin-bottom: 8px;
  display: block;
  transition: all 0.3s ease 0s;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;
const QuizOptionButton = (props: any) => {
  const { children } = props;
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
export default QuizOptionButton;
