import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return <ButtonStyle onClick={props.onClick}>{props.btnText}</ButtonStyle>;
};

export default Button;

// const styles = {
//   btn: {
//     paddingTop: '.5rem',
//     backgroundColor: '#FFD744',
//     borderRadius: '1rem',
//     fontSize: '3rem',
//     cursor: 'pointer',
//   },
// };

const ButtonStyle = styled.button`
  background-color: #f582ae;
  color: #fff;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
