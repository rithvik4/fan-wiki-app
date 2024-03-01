import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CharacterList.css';

const CharacterList = ({ characters }) => {
  return (
    <div>
      <h2 className="fadeIn">Character List</h2>
      <ul className="fadeIn">
        {characters.map(character => (
          <li key={character._id} className="fadeIn">
            <Link to={`/character/${character._id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
