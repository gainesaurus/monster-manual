import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);

  const fetchMonsters = () => {
    fetch('https://www.dnd5eapi.co/api/monsters')
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

  return (
    <div className="App">
      <h1>Monster Search</h1>
      {monsters && (
          <ul>
            {monsters.map(monster => (
              <li key={monster.name} className='monsterCard'>
                <img src={`https://www.aidedd.org/dnd/images/${monster.index}.jpg`}
                className='monsterImg'
                alt={monster.name}
                loading='lazy' />
                <p>{monster.name}</p>
              </li>
            ))}
          </ul>
      )}
    </div>
  );
}

export default App;
