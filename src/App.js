import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);

  const fetchMonsters = () => {
    fetch('https://api.open5e.com/monsters')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setMonsters(data.results)
    })
  }

  useEffect(() => {
    fetchMonsters();
  }, [])

  console.log(monsters)

  return (
    <div className="App">
      <h1>Monster Search</h1>
      {monsters.length && (
          <ul>
            {monsters.map(monster => (
              <li key={monster.name}>{monster.name}</li>
            ))}
          </ul>
      )}
    </div>
  );
}

export default App;
