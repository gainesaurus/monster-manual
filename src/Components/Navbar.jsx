import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header className='navContainer'>
      <Link to='/monster-manual' className='homeLink'>
        <img src='https://www.aidedd.org/dnd/images/mimic.jpg' 
        alt="dnd mimic"
        title="home"
        className='homeLinkImg' />
      </Link>
      <h1 className="heading">Monster Search</h1>
    </header>
  )
}

export default Navbar;