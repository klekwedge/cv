// import './Sidebar.scss';

function About() {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">Обо мне</h2>
      </header>

      <section className="about-text">
        <p>
          Студент 4 курса СПбПУ на направлении «Системный анализ и управление», специализация «Теория и математические
          методы системного анализа и управления в технических, экономичеcких и социальных системах». Закончил курс JS /
          FRONT-END STAGE 0 от компании EPAM.
        </p>

        <p>
          У меня есть обширный опыт в работе со многиими популярными технологиями, фреймворками и библиотеками. Этот
          опыт позволяет мне создавать высококачественные и производительные веб-приложения. Я придаю большое значение
          дизайну и пользовательскому опыту, и всегда стремлюсь к созданию интерфейсов, которые не только функциональны,
          но и эстетичны. Моя работа всегда соблюдает современные стандарты и лучшие практики. Всегда готов учиться
          новым технологиям и инструментам. Я стремлюсь быть в курсе последних тенденций и применять их в своей работе.
          Моя цель - создавать продукты высокого качества, которые удовлетворяют потребности пользователей и достигают
          целей бизнеса.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-design.svg
            "
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>

              <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">High-quality development of sites at the professional level.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>

              <p className="service-item-text">Professional development of applications for iOS and Android.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>

              <p className="service-item-text">I make high-quality photos of any category at a professional level.</p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
