import { styled } from 'styled-components';
const OwnerCard = ({ owners, _id, removeOwners }) => {
  return (
    <>
      {owners.map((owner) => (
        <Article key={owner._id}>
          <p>Name: {owner.name}</p>
          <p>Age: {owner.age}</p>
          <p>Email: {owner.email}</p>
          <button onClick={() => removeOwners(_id)}>X</button>
        </Article>
      ))}
    </>
  );
};

export default OwnerCard;

const Article = styled.article`
  margin: auto;
  width: 25%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-weight: bold;
  color: #001858;
  background-color: #f3d2c1;
`;
