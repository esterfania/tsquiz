import styled from "styled-components";
import React from "react";

const Input = styled.input`
  width: 100%;
  height: 38px;
  font-size: 15px;
  color: white;
  padding: 10px;
  outline: 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3.5px;
  background-color: transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.light};
  }
`;
export function QuizInput() {
  return <Input autoFocus></Input>;
}
