import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import links from "../../data/linkData";
import "./Header.scss";

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
          <a href="https://github.com/klekwedge" target="_blank" rel="noreferrer">
            <img className="menu__logo" src="assets/img/logo.png" alt='Логотип' />
          </a>
          <nav className="menu__body" ref={menuBody}>
            <ul className="menu__list">
              {links.map((item) => (
                <li className="menu__item" key={uuidv4()}>
                  <a
                    href={item.href}
                    onClick={menuLinksToggle}
                    className="menu__link _link"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menu__icon" ref={iconMenu} onClick={iconMenuToggle}>
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
