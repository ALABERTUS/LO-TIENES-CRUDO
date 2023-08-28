import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(Response => Response.json())
      .then(data => setCharacters(data));
  }, []);


  return (
    <div>
      <div className="card">
        {characters.map(character => (
          <div className="card Img" key={character.name}>
            <img src={character.image} alt={character.name} />
            <h1>Name: {character.name}</h1>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>House: {character.house}</p>
            <p>Date of birth: {character.dateOfBirth}</p>
            <p>Year of Birth{character.yearOfBirth}</p>
            <p>Wizard: {character.wizard}</p>
            <p>Ancestry: {character.ancestry}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;