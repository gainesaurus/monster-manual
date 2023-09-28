import { Link } from 'react-router-dom';
import { findMonsterImg } from "../services";

const MonsterCard = ({ monster, setSelectedMonster }) => {
  let monsterFileName = findMonsterImg(monster);
  
  return (
    <Link to={`/${monster.index}`}
      key={monster.index}
      className='monsterCard'
      onClick={()=> setSelectedMonster(monster)}>
      <img
        src={`https://www.aidedd.org/dnd/images/${monsterFileName}.jpg`}
        onError={(e) => {
          e.currentTarget.src ='https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg'}}
        className='monsterImg'
        alt={monster.name}
        loading='lazy' />
      <label className='cardLabel'>{monster.name}</label>
    </Link>
  )
}

export default MonsterCard;