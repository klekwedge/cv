
function Footer() {

  return (
    <footer className="footer">
    <div className="footer__container _container">
      <ul className="footer__list">
        <li className="footer__item">
          <ul className="footer__list-contacts contacts">
            <li className="contacts__item">
              Телефон:
              <a className="_link" href="tel:+79112780000">+7 911 278 ** **</a>
            </li>
            <li className="contacts__item">
              Почта:
              <a className="_link" href="mailto:antonov.andrey.10101@gmail.com">antonov.andrey.10101@gmail.com</a>
            </li>
          </ul>
        </li>
        <li className="footer__item">
          <ul className="footer__list-links links">
            <li className="links__item">
              <a href="https://t.me/klekkwedge">
                <img className="icon__image _icon" src="assets/svg/telegram.svg" alt="Telegram icon" />
              </a>
            </li>
            <li className="links__item">
              <a href="https://www.linkedin.com/in/klekwedge/">
                <img className="icon__image _icon" src="assets/svg/linkedIn.svg" alt="Linkedin logo" />
              </a>
            </li>
            <li className="links__item">
              <a href="https://github.com/klekwedge">
                <img className="icon__image _icon" src="assets/svg/github.svg" alt="Github logo" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="footer__copyright">
        <div>© 2022 by Andrey Antonov</div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
