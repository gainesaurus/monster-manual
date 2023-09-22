import { useEffect, useState } from 'react';
import MonsterCard from './Components/MonsterCard';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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
      <input
        className='searchBar'
        placeholder="Find a Monster"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}>
      </input>
      {monsters && (
      <ul>
        {monsters
        .filter((monster) => monster.name.toLowerCase().includes(searchInput.toLowerCase()))
        .map(monster => (
          <MonsterCard monster={monster}/>
        ))}
      </ul>
  )}
    </div>
  );
}

export default App;
