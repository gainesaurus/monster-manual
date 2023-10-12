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
          <p>AC: {thisMonster.armor_class[0].value}</p>
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
             {thisMonster.speed.climb &&
              <p>Climb Speed: {thisMonster.speed.climb}</p>
            }
            {thisMonster.speed.burrow &&
              <p>Burrow Speed: {thisMonster.speed.burrow}</p>
            }
            {thisMonster.speed.swim &&
              <p>Swim Speed: {thisMonster.speed.swim}</p>
            }
          </div>
        </div>
      </section>
      <div className='scoreProfContainer'>
        <section className='scoreContainer'>
          <p>Strength: {thisMonster.strength}</p>
          <p>Dexterity: {thisMonster.dexterity}</p>
          <p>Constitution: {thisMonster.constitution}</p>
          <p>Intelligence: {thisMonster.intelligence}</p>
          <p>Wisdom: {thisMonster.wisdom}</p>
          <p>Charisma: {thisMonster.charisma}</p>
        </section>
        <section className='profContainer'>
          <label>Proficiencies:</label>
          {thisMonster.proficiencies.length > 0 ? thisMonster.proficiencies.map(proficiency => (
            <p>{proficiency.proficiency.name}</p>
          )
          ) : <p>none</p>}
        </section>
      </div>
      <section className='immResContainer'>
        <label>Vulnerabilities:</label>
        <ul>
          {thisMonster.damage_vulnerabilities.length > 0 ? thisMonster.damage_vulnerabilities.map(vulnerability => (
            <li>{vulnerability}</li>
          )
          ) : <li>none</li>}
        </ul>
        <label>Resistances:</label>
        <ul>
          {thisMonster.damage_resistances.length > 0 ? thisMonster.damage_resistances.map(resistance => (
              <li>{resistance}</li>
            )
            ) : <li>none</li>}
        </ul>
        <label>Damage Immunities:</label>
        <ul>
          {thisMonster.damage_immunities.length > 0 ? thisMonster.damage_immunities.map(immunity => (
              <li>{immunity}</li>
            )
            ) : <li>none</li>}
        </ul>
        <label>Condition Immunities:</label>
        <ul>
          {thisMonster.condition_immunities.length > 0 ? thisMonster.condition_immunities.map(immunity => (
              <li>{immunity.index}</li>
            )
            ) : <li>none</li>}
        </ul>
      </section>
      <section className='abilityContainer'>
        <ul>
        {thisMonster.special_abilities &&
          thisMonster.special_abilities.map(ability => (
            <li>
              <label>{ability.name}</label>
              <p>{ability.desc}</p>
            </li>
          ))
        }
        </ul>
      </section>
      <section className='actionContainer'>
        <ul>
        {thisMonster.actions &&
          thisMonster.actions.map(action => (
            <li>
              <label>{action.name}</label>
              <p>{action.desc}</p>
            </li>
          ))
        }
        </ul>
      </section>
      <section className='legActionContainer'>
        <ul>
        {thisMonster.legendary_actions &&
          thisMonster.legendary_actions.map(legAction => (
            <li>
              <label>{legAction.name}</label>
              <p>{legAction.desc}</p>
            </li>
          ))
        }
        </ul>
      </section>
    </div>
  )
}

export default MonsterStatsPage;