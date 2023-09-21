import { useEffect, useState } from 'react';
import MonsterCard from './Components/MonsterCard';
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
      <h1 className="heading">Monster Search</h1>
      {monsters && (
      <ul>
        {monsters.map(monster => (
          <MonsterCard monster={monster}/>
        ))}
      </ul>
  )}
    </div>
  );
}

export default App;
