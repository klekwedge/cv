import { EMAIL_ID, RESUME_LINK } from "../../data/variables";
import './Greetings.scss';

function Greetings() {
  return (
    <section className="main__greetings greetings">
      <div className="greetings__container _container">
        <div className="greetings__info">
          <h2 className="greetings__name">Привет, меня зовут Андрей</h2>
          <h3 className="greetings__qualification  text-focus-in">
            Я Frontend разработчик
          </h3>
          <div className="greetings__buttons">
            <a className="greetings__button" href={`mailto:${EMAIL_ID}`}>
              <img src="./assets/svg/mail-icon.svg" /> Напишите мне
            </a>
            <a
              className="greetings__button"
              download
              href={RESUME_LINK}
              title="Download CV in PDF format"
            >
              <img src="./assets/svg/download-icon.svg" />
              Скачать резюме
            </a>
          </div>
        </div>
        <img className="greetings__image" src="/public/assets/svg/illustration.svg" />
      </div>
    </section>
  );
}

export default Greetings;
