import MonsterCard from "./MonsterCard";

const MonsterList = ({ monsters, searchInput, setSelectedMonster}) => {

  return (
    <ul>
      {monsters && 
        monsters.filter((monster) => monster.name.toLowerCase().includes(searchInput.toLowerCase()))
        .map(monster => (
        <MonsterCard
          monster={monster}
          setSelectedMonster={setSelectedMonster}/>
      ))}
    </ul>
  )
}

export default MonsterList;