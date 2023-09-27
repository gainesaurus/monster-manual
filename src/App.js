import { useEffect, useState } from 'react';
import MonsterList from './Components/MonsterList';
import MonsterStats from './Components/MonsterStats';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedMonster, setSelectedMonster] = useState(null);

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
        {!selectedMonster ? (
          <MonsterList
            monsters={monsters}
            searchInput={searchInput}
            setSelectedMonster={setSelectedMonster}/>
        )
        : <MonsterStats
            selectedMonster={selectedMonster}/>
        }
    </div>
  );
}

export default App;
