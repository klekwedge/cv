
function Header() {

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__menu menu">
          <h1 className="menu__logo">
            <span>A</span>
            Andrey Antonov
          </h1>
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#about" className="menu__link _link">Обо мне </a>
              </li>
              <li className="menu__item">
                <a href="#skills" className="menu__link _link">Навыки</a>
              </li>
              <li className="menu__item">
                <a href="#strengths" className="menu__link _link">Сильные стороны</a>
              </li>
              <li className="menu__item">
                <a href="#projects" className="menu__link _link">Проекты</a>
              </li>
            </ul>
          </nav>
          <div className="menu__icon">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
