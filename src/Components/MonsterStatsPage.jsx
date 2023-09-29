import { useState, useEffect } from 'react';
import { findMonsterImg } from '../services';

const MonsterStatsPage = ({ selectedMonster }) => {
  const [thisMonster, setThisMonster] = useState(null);
  let monsterFileName = findMonsterImg(selectedMonster);

  const fetchOneMonster = (monster) => {
    fetch(`https://www.dnd5eapi.co/api/monsters/${monster.index}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setThisMonster(data)
    })
  }
  
  useEffect(() => {
    fetchOneMonster(selectedMonster);
  }, [selectedMonster]);

  return (thisMonster &&
    <div className='statSheetContainer'>
      <section className='bioContainer'>
        <img
          src={`https://www.aidedd.org/dnd/images/${monsterFileName}.jpg`}
          onError={(e) => {
            e.currentTarget.src ='https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg'}}
          className='statBlockImg'
          alt={selectedMonster.name}
          loading='lazy' />
        <div className='bioInfo'>
          <h2 className='monsterNameCard'>{thisMonster.name}</h2>
          <p>{thisMonster.alignment}</p>
          <p>{thisMonster.size} {thisMonster.type} - CR: {thisMonster.challenge_rating}</p>
          <p>AC: {thisMonster.armor_class.value}</p>
          <p>HP: {thisMonster.hit_points}</p>
          <p>HP Roll: {thisMonster.hit_points_roll}</p>
          <p>Hit Dice: {thisMonster.hit_dice}</p>
          <div className='speedContainer'>
            {thisMonster.speed.walk &&
              <p>Walk Speed: {thisMonster.speed.walk}</p>
            }
            {thisMonster.speed.fly &&
              <p>Fly Speed: {thisMonster.speed.fly}</p>
            }
            {thisMonster.speed.walk &&
              <p>Walk Speed: {thisMonster.speed.walk}</p>
            }
            {thisMonster.speed.swim &&
              <p>Swim Speed: {thisMonster.speed.swim}</p>
            }
          </div>
        </div>
      </section>
      <section className='scoreContainer'>
        <p>Strength:{thisMonster.strength}</p>
        <p>Dexterity:{thisMonster.dexterity}</p>
        <p>Constitution:{thisMonster.constitution}</p>
        <p>Intelligence:{thisMonster.intelligence}</p>
        <p>Wisdom:{thisMonster.wisdom}</p>
        <p>Charisma:{thisMonster.charisma}</p>
      </section>
      <section className='profContainer'>
        <label>Proficiencies:</label>
        {thisMonster.proficiencies.map(proficiency => (
          <p>{proficiency.proficiency.name}</p>
        )
        )}
      </section>
      <section className='immResContainer'>
        <label>Vulnerabilities:</label>
        <label>Resistances:</label>
        <label>Damage Immunities:</label>
        <label>Condition Immunities:</label>
      </section>
      <section className='abilityContainer'>
        {thisMonster.special_abilities &&
          thisMonster.special_abilities.map(ability => (
            <div>
              <p>{ability.name}</p>
              <p>{ability.desc}</p>
            </div>
          ))
        }
      </section>
      <section className='actionContainer'>
        {thisMonster.actions &&
          thisMonster.actions.map(action => (
            <div>
              <p>{action.name}</p>
              <p>{action.desc}</p>
            </div>
          ))
        }
      </section>
      <section className='legActionContainer'>
        {thisMonster.legendary_actions &&
          thisMonster.legendary_actions.map(legAction => (
            <div>
              <p>{legAction.name}</p>
              <p>{legAction.desc}</p>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default MonsterStatsPage;