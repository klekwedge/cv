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

  const activeLink = () => {
    const links = document.querySelectorAll("nav a"); // ищем все навигационные ссылки
    const sections = document.querySelectorAll("section"); // ищем все секции
    sections.forEach((section) => {
      if (window.pageYOffset >= section.offsetTop) {
        links.forEach((link) => {
          link.classList.remove("_active-link");

          if (
            link.getAttribute("href")?.replace("#", "") ===
            section.getAttribute("id")
          ) {
            link.classList.add("_active-link");
          }
        });
      }
    });
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
          <nav className="menu__body" ref={menuBody}>
            <ul className="menu__list">
              {links.map((item) => (
                <li className="menu__item">
                  <a
                    href={item.href}
                    className="menu__link _link"
                    onClick={menuLinksToggle}
                    key={uuidv4()}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
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
