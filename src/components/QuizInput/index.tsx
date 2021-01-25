import styled from "styled-components";
import React from "react";

const Input = styled.input`
  width: 100%;
  font-size: 15px;
  color: white;
  padding: 10px;
  outline: 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  background-color: transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.light};
  }
`;
export function QuizInput() {
  return <Input autoFocus></Input>;
}
