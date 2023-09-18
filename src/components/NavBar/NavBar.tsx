import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
            Обо мне
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
            Опыт работы
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
            Портфолио
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
