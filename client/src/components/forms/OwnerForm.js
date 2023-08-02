import React from 'react';
import MyInput from './MyInput';
import Button from '../buttons/Button';
import { styled } from 'styled-components';

const OwnersForm = (props) => {
  return (
    <Form onSubmit={props.addOwner}>
      <p>Add Owner</p>
      <Label>Name</Label>
      <MyInput
        id="name"
        type="text"
        placeholder="Name"
        value={props.name}
        onChange={props.nameInput}
      />
      <Label>Age</Label>
      <MyInput
        id="age"
        type="number"
        placeholder="Age"
        value={props.age}
        onChange={props.ageInput}
      />
      <Label>Email</Label>
      <MyInput
        id="email"
        type="text"
        placeholder="Email"
        value={props.email}
        onChange={props.emailInput}
      />
      <Button btnText="Add Owner" />
    </Form>
  );
};
export default OwnersForm;

const Form = styled.form`
  padding: 5px;
`;

const Label = styled.label`
  padding: 5px;
`;
