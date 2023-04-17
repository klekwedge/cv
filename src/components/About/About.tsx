import './About.scss';

function About() {
  return (
    <section className="main__about about" id="about">
      <div className="_heading">
        <h3 className="about__title _title">Обо мне</h3>
        <div className="_heading-decoration" />
      </div>
      <div className="about__content">
        <div className="about__photo ">
          <img className="about__image flip-in-hor-bottom" src="assets/img/personal-photo.jpg" alt="Мое фото" />
        </div>
        <div className="about__text ">
          <p className="about__paragraph _text ">
            Студент 3 курса СПбПУ на направлении «Системный анализ и управление», специализация «Теория и математические
            методы системного анализа и управления в технических, экономичеcких и социальных системах». Закончил курс JS
            / FRONT-END STAGE 0 от компании EPAM.
          </p>
          <br />
          <p className="about__paragraph _text ">
            Имею базовое представление о Next.js, Redux Saga, Node.js, React Native, Express, Mongo DB, SQL, MySQL,
            Python, Java, C++, GraphQL, Jest, Enzyme, React Testing Library, Figma, jQuery, Pug, ООП и паттернах
            проектирования.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
