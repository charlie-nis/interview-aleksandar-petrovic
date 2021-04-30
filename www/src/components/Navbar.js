const Navbar = () => {
  return (
    <div style={{ marginBottom: '30px' }} className='navbar-fixed'>
      <nav className='blue'>
        <div className='nav-wrapper nav-container'>
          <a href='#!' className='brand-logo'>
            <i style={{ fontSize: '50px' }} className='material-icons '>
              task_alt
            </i>
            ToDoList App <small style={{ fontSize: '9px' }}> v1.2</small>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='About.html'>About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
