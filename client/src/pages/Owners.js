import React, { useEffect, useState } from 'react';
import { createOwner, getOwner } from '../services/ownerService';
import OwnerCard from '../components/cards/OwnerCard';
import OwnersForm from '../components/forms/OwnerForm';

function Owners() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [owners, setOwners] = useState('');
  const [owner, setOwner] = useState('');

  useEffect(() => {
    getOwner()
      .then((result) => {
        setOwners(result.data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setOwner, owner]);

  const nameInput = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const ageInput = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  const emailInput = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const addOwner = (e) => {
    e.preventDefault();
    createOwner(name, age, email)
      .then((result) => {
        setName('');
        setAge('');
        setEmail('');
        setOwner(result.data.result);
      })
      .catch((err) => {
        console.log('Error ', err.message);
      });
    console.log(addOwner);
  };

  return (
    <section style={StyleSheet.container}>
      <h1>Owners</h1>
      <OwnersForm
        addOwner={addOwner}
        nameInput={nameInput}
        ageInput={ageInput}
        emailInput={emailInput}
      />
      <OwnerCard owners={owners} />
    </section>
  );
}

export default Owners;
