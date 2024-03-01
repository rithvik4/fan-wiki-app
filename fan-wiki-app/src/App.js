import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './styles/App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch characters from Futurama API
    axios.get('https://futuramaapi.herokuapp.com/api/characters')
      .then(response => setCharacters(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Futurama Fan Wiki</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <CharacterList characters={characters} />
          </Route>
          <Route path="/character/:id">
            <CharacterDetail characters={characters} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
