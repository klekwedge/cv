// import './Sidebar.scss';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button type="button" className="navbar-link  active" data-nav-link>
            Обо мне
          </button>
        </li>

        <li className="navbar-item">
          <button type="button" className="navbar-link" data-nav-link>
            Опыт работы
          </button>
        </li>

        <li className="navbar-item">
          <button type="button" className="navbar-link" data-nav-link>
            Портфолио
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
