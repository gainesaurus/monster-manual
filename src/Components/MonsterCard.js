import React from "react";

const MonsterCard = ({ monster }) => {
  let monsterFileName;
  if (!monster.index.toLowerCase().includes('dragon') && !monster.index.toLowerCase().includes('were') && !monster.index.toLowerCase().includes('vampire')) {
    monsterFileName = monster.index;
  }
  else if (monster.index.includes('black-dragon')) {
    monsterFileName = 'black-dragon';
  }
  else if (monster.index.includes('blue-dragon')) {
    monsterFileName = 'blue-dragon';
  }
  else if (monster.index.includes('brass-dragon')) {
    monsterFileName = 'brass-dragon';
  }
  else if (monster.index.includes('bronze-dragon')) {
    monsterFileName = 'bronze-dragon';
  }
  else if (monster.index.includes('copper-dragon')) {
    monsterFileName = 'copper-dragon';
  }
  else if (monster.index.includes('gold-dragon')) {
    monsterFileName = 'gold-dragon';
  }
  else if (monster.index.includes('green-dragon')) {
    monsterFileName = 'green-dragon';
  }
  else if (monster.index.includes('red-dragon')) {
    monsterFileName = 'red-dragon';
  }
  else if (monster.index.includes('silver-dragon')) {
    monsterFileName = 'silver-dragon';
  }
  else if (monster.index.includes('white-dragon')) {
    monsterFileName = 'white-dragon';
  }
  else if (monster.index.toLowerCase().includes('werebear')) {
    monsterFileName = 'wereBear';
  }
  else if (monster.index.toLowerCase().includes('wereboar')) {
    monsterFileName = 'wereBoar';
  }
  else if (monster.index.toLowerCase().includes('wererat')) {
    monsterFileName = 'wereRat';
  }
  else if (monster.index.toLowerCase().includes('weretiger')) {
    monsterFileName = 'wereTiger';
  }
  else if (monster.index.toLowerCase().includes('werewolf')) {
    monsterFileName = 'wereWolf';
  }
  else if (monster.index.toLowerCase().includes('vampire-spawn')) {
    monsterFileName = 'vampire-spawn';
  }
  else if (monster.index.toLowerCase().includes('vampire')) {
    monsterFileName = 'vampire';
  }
  else monsterFileName = monster.index;


  return (
    <li key={monster.index} className='monsterCard'>
      <img src={`https://www.aidedd.org/dnd/images/${monsterFileName}.jpg`}
        onError={(e) => {
          e.currentTarget.src ='https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg'}}
        className='monsterImg'
        alt={monster.name}
        loading='lazy' />
      <p>{monster.name}</p>
    </li>
  )
}

export default MonsterCard;