import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

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
const QuizInput = (props: any) => <Input autoFocus {...props} />;

QuizInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default QuizInput;
