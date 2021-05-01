import { Link } from 'react-router-dom';

const Navbar = ({ appVersion }) => {
  return (
    <div style={{ marginBottom: '30px' }} className='navbar-fixed'>
      <nav className='blue'>
        <div className='nav-wrapper nav-container'>
          <Link to='/' className='brand-logo'>
            <i style={{ fontSize: '50px' }} className='material-icons '>
              task_alt
            </i>
            ToDoList App <small style={{ fontSize: '9px' }}> v{appVersion}</small>
          </Link>
          <ul className='right '>
            <li>
              <Link to='/About'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
