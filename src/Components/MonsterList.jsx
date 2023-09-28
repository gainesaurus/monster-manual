import { useState, useEffect } from 'react';
import MonsterCard from "./MonsterCard";

const MonsterList = ({ setSelectedMonster}) => {
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
    <div className='listContainer'>
      <h1 className="heading">Monster Search</h1>
      <input
        className='searchBar'
        placeholder="Find a Monster"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}>
      </input>
      <ul>
        {monsters && 
          monsters.filter((monster) => monster.name.toLowerCase().includes(searchInput.toLowerCase()))
          .map(monster => (
          <MonsterCard
            monster={monster}
            setSelectedMonster={setSelectedMonster}/>
        ))}
      </ul>
    </div>
  )
}

export default MonsterList;