import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header>
      <Link to='/monster-manual'>Home</Link>
      <h1 className="heading">Monster Search</h1>
    </header>
  )
}

export default Navbar;