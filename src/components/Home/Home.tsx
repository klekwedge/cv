import { EMAIL_ID, RESUME_LINK } from "../../data/variables";
import './Home.scss';

function Home() {
  return (
    <section className="main__home home">
      <div className="home__container _container">
        <div className="home__info">
          <h2 className="home__name">Привет, меня зовут Андрей</h2>
          <h3 className="home__qualification">
            Я Frontend разработчик
          </h3>
          <div className="home__buttons">
            <a className="home__button" href={`mailto:${EMAIL_ID}`}>
              <img src="./assets/svg/mail-icon.svg" /> Напишите мне
            </a>
            <a
              className="home__button"
              download
              href={RESUME_LINK}
              title="Download CV in PDF format"
            >
              <img src="./assets/svg/download-icon.svg" />
              Скачать резюме
            </a>
          </div>
        </div>
        <img className="home__image" src="/public/assets/svg/illustration.svg" />
      </div>
    </section>
  );
}

export default Home;
