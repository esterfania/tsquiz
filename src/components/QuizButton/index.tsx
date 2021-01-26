import styled from "styled-components";

export const QuizButton = styled.button`
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
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    outline: 1px solid white;
  }
`;
