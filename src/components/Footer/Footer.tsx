import {
  EMAIL_ID,
  GITHUB_USERNAME,
  LINKEDIN_ID,
  TELEGRAM_ID,
} from "../../data/variables";
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <ul className="footer__list">
          <li className="footer__item">
            <ul className="footer__list-links links">
              <li className="links__item">
                <a href={`https://t.me/${TELEGRAM_ID}/`}>
                  <img
                    className="icon__image _icon"
                    src="assets/svg/telegram.svg"
                    alt="Telegram icon"
                  />
                </a>
              </li>
              <li className="links__item">
                <a href={`https://www.linkedin.com/in/${LINKEDIN_ID}/`}>
                  <img
                    className="icon__image _icon"
                    src="assets/svg/linkedIn.svg"
                    alt="Linkedin logo"
                  />
                </a>
              </li>
              <li className="links__item">
                <a href={`https://github.com/${GITHUB_USERNAME}/`}>
                  <img
                    className="icon__image _icon"
                    src="assets/svg/github.svg"
                    alt="Github logo"
                  />
                </a>
              </li>
              <li className="links__item">
                <a className="_link" href={`mailto:${EMAIL_ID}`}>
                  <img src="./assets/svg/mail-icon.svg" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
