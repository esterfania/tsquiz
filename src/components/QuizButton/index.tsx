/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-style: none;
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
    background-color: #25232e;
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
