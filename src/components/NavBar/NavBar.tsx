// import './Sidebar.scss';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')} data-nav-link>
            Обо мне
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/resume"
            data-nav-link
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
          >
            Опыт работы
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            data-nav-link
          >
            Портфолио
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
