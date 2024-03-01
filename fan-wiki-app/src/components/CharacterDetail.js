import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = ({ characters }) => {
  const { id } = useParams();
  const character = characters.find(char => char._id === id);

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <h2>{character.name} Details</h2>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Occupation: {character.occupation}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CharacterDetail;
