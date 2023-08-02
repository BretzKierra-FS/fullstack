import React from 'react';
import styled from 'styled-components';

//Dummy
const myInput = (props) => {
  return (
    <Input
      id={props.id}
      type={props.inputType}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
export default myInput;
const Input = styled.input`
  display: inline-block;
`;
