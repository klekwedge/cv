function About() {
  return (
    <section className="main__about" id="about">
      <div className="_heading">
        <h3 className="about__title _title">
          Обо мне
        </h3>
      </div>
      <div className="about__content">
        <div className="about__photo _anim-item">
          <img
            className="about__image flip-in-hor-bottom"
            src="assets/img/personal-photo.jpg"
            alt="My personal photo"
          />
        </div>
        <div className="about__text _anim-item">
          <p className="about__paragraph _text _anim-slides-bottom">
            Являюсь студентом 3 курса СПбПУ на направлении «Системный анализ и
            управление», специализация «Теория и математические методы
            системного анализа и управления в технических, экономичеcких и
            социальных системах». На 1 курсе программировал на C++, на 2 курсе
            был опыт программирования на Python. Закончил курс JS / FRONT-END
            STAGE 0 от компании EPAM.
          </p>
          <br />
          <p className="about__paragraph _text _anim-slides-bottom">
            Имею базовое представление о Next.js, Redux Saga, Node.js и
            паттернах проектирования.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
