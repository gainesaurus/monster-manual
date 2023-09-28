import { useState, useEffect } from 'react';

const MonsterStatsPage = ({ selectedMonster }) => {
  const [thisMonster, setThisMonster] = useState(null);

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
    <div>
      <section>
        <h2>{thisMonster.name}</h2>
        <p>{thisMonster.size}</p>
        <p>{thisMonster.type}</p>
        <p>{thisMonster.alignment}</p>
        <p>CR:{thisMonster.challenge_rating}</p>
      </section>
      <section>
        <p>AC:{thisMonster.armor_class.type}</p>
        <p>HP:{thisMonster.hit_points}</p>
        <p>Hit Dice:{thisMonster.hit_dice}</p>
        <p>HP Roll:{thisMonster.hit_points_roll}</p>
      </section>
      <section>
        {thisMonster.speed.walk &&
          <p>Walk Speed:{thisMonster.speed.walk}</p>
        }
        {thisMonster.speed.fly &&
          <p>Fly Speed:{thisMonster.speed.fly}</p>
        }
        {thisMonster.speed.walk &&
          <p>Walk Speed:{thisMonster.speed.walk}</p>
        }
        {thisMonster.speed.swim &&
          <p>Swim Speed:{thisMonster.speed.swim}</p>
        }
      </section>
      <section>
        <p>Strength:{thisMonster.strength}</p>
        <p>Dexterity:{thisMonster.dexterity}</p>
        <p>Constitution:{thisMonster.constitution}</p>
        <p>Intelligence:{thisMonster.intelligence}</p>
        <p>Wisdom:{thisMonster.wisdom}</p>
        <p>Charisma:{thisMonster.charisma}</p>
      </section>
      <section>
        <label>Proficiencies:</label>
        {thisMonster.proficiencies.map(proficiency => (
          <p>{proficiency.proficiency.name}</p>
        )
        )}
      </section>
      <section>
        <label>Vulnerabilities:</label>
        <label>Resistances:</label>
        <label>Damage Immunities:</label>
        <label>Condition Immunities:</label>
      </section>
      <section>
        {thisMonster.special_abilities &&
          thisMonster.special_abilities.map(ability => (
            <div>
              <p>{ability.name}</p>
              <p>{ability.desc}</p>
            </div>
          ))
        }
      </section>
      <section>
        {thisMonster.actions &&
          thisMonster.actions.map(action => (
            <div>
              <p>{action.name}</p>
              <p>{action.desc}</p>
            </div>
          ))
        }
      </section>
      <section>
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