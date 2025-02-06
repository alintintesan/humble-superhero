import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const endpoint = 'http://localhost:3001/superheroes';

  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');
  const [superheroList, setSuperheroList] = useState([]);
  const [error, setError] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleSuperpowerChange = (e) => setSuperpower(e.target.value);
  const handleHumilityScoreChange = (e) => setHumilityScore(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const superheroData = {
      name,
      superpower,
      humilityScore: parseInt(humilityScore),
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(superheroData),
    });

    if (response.ok) {
      setError('');
      await fetchData();
      setName('');
      setSuperpower('');
      setHumilityScore('');
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.message || 'An error occurred. Please try again.';
      setError(errorMessage);
    }
  };

  const fetchData = async () => {
    const response = await fetch(endpoint);
    if (response.ok) {
      const data = await response.json();
      setSuperheroList(data);
    } else {
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', padding: '10px' }}>
        <h3>Add a new superhero:</h3>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Name:
              <input style={{ marginLeft: '10px' }} required
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter superhero name"
              />
            </label>
          </div>
          <div>
            <label>
              Superpower:
              <input style={{ marginLeft: '10px' }} required
                type="text"
                value={superpower}
                onChange={handleSuperpowerChange}
                placeholder="Enter superpower"
              />
            </label>
          </div>
          <div>
            <label>
              Humility Score:
              <input style={{ marginLeft: '10px' }} required
                type="number"
                value={humilityScore}
                onChange={handleHumilityScoreChange}
                placeholder="Enter humility score"
              />
            </label>
          </div>
          <button type="submit">Add</button>
        </form>

        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      </div>

      <div style={{ width: '50%', padding: '10px' }}>
        <h3>Stored superheroes:</h3>
        <ul>
          {superheroList.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong>
              <br />
              Superpower: {item.superpower}
              <br />
              Humility Score: {item.humilityScore}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
