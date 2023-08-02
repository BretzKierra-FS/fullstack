import axios from 'axios';

// Get Owner
export const getOwner = async (res) => {
  console.log('Real Get');
  return await axios.get('http://localhost:3000/owners').then();
};

// Post Owner
export const createOwner = async (name, age, email) => {
  console.log('Real Post - Create');
  return await axios.post('http://localhost:3000/owners', {
    owner: {
      name: name,
      age: age,
      email: email,
    },
  });
};

// Edit Owner

export const updateOwner = async (name, age, email) => {
  console.log('real Edit');
  return await axios.patch('http://localhost:3000/owners', {
    name: name,
    age: age,
    email: email,
  });
};

// Delete Owner

export const deleteOwner = async (name, age, email,) => {
  console.log('real Delete');
  return await axios.delete('http://localhost:3000/owners', {
    name: name,
    age: age,
    email: email,
  });
};
