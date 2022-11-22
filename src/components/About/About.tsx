

function About() {

  return (
    <section className="main__about about">
          <div className="_heading">
            <h3 id="about" className="about__title _title">Обо мне</h3>
          </div>
          <div className="about__content">
            <div className="about__photo _anim-item">
              <img className="about__image flip-in-hor-bottom" src="assets/img/personal-photo.jpg"
                alt="My personal photo" />
            </div>
            <div className="about__text _anim-item">
              <p className="about__paragraph _text _anim-slides-bottom">
                Студент СПбПУ на направлении «Системный анализ и управление», специализация «Теория и математические
                методы системного анализа и управления в технических, экономичеcких и социальных системах». Перешел на 3
                курс. На 1 курсе программировал на C++, на 2 курсе был опыт программирования на Python.
              </p>
              <br />
              <p className="about__paragraph _text _anim-slides-bottom">
                Заинтересован в frontend разработке и хочу развиваться и работать в этой сфере. Мне нравится заниматься
                версткой сайтов, продумывать общую структуру HTML-разметки, добавлять интерактивность интерфейсам сайта,
                постоянно узнавать что-то новое и постоянно повышать свои навыки в web-разработке.
              </p>
            </div>
          </div>
        </section>
  )
}

export default About
