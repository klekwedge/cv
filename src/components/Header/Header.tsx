import { useRef } from "react";

function Header() {
  const iconMenu = useRef<HTMLDivElement>(null);
  const menuBody = useRef<HTMLElement>(null);

  const iconMenuToggle = () => {
    if (iconMenu.current && menuBody.current) {
      document.body.classList.toggle("_lock");
      iconMenu.current.classList.toggle("_active");
      menuBody.current.classList.toggle("_active");
    }
  };

  const menuLinksToggle = () => {
    if (iconMenu.current && iconMenu.current.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.current.classList.remove("_active");
      menuBody.current?.classList.remove("_active");
    }
  };

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__menu menu">
          <h1 className="menu__logo">
            <span>A</span>
            Andrey Antonov
          </h1>
          <nav className="menu__body" ref={menuBody}>
            <ul className="menu__list">
              <li className="menu__item">
                <a
                  href="#about"
                  className="menu__link _link"
                  onClick={menuLinksToggle}
                >
                  Обо мне
                </a>
              </li>
              <li className="menu__item">
                <a
                  href="#skills"
                  className="menu__link _link"
                  onClick={menuLinksToggle}
                >
                  Навыки
                </a>
              </li>
              <li className="menu__item">
                <a
                  href="#strengths"
                  className="menu__link _link"
                  onClick={menuLinksToggle}
                >
                  Опыт
                </a>
              </li>
              <li className="menu__item">
                <a
                  href="#projects"
                  className="menu__link _link"
                  onClick={menuLinksToggle}
                >
                  Проекты
                </a>
              </li>
            </ul>
          </nav>
          <div className="menu__icon" ref={iconMenu} onClick={iconMenuToggle}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
