import { findMonsterImg } from "../services";

const MonsterCard = ({ monster }) => {
  let monsterFileName = findMonsterImg(monster);
  
  return (
    <li key={monster.index} className='monsterCard'>
      <div className='imgContainer'>
        <img
          src={`https://www.aidedd.org/dnd/images/${monsterFileName}.jpg`}
          onError={(e) => {
            e.currentTarget.src ='https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg'}}
          className='monsterImg'
          alt={monster.name}
          loading='lazy' />
      </div>
      <label className='cardLabel'>{monster.name}</label>
    </li>
  )
}

export default MonsterCard;