import Skills from '../Skills/Skills';
import './About.scss';

function About() {
  return (
    <article className="about">
      <header>
        <h2 className="h2 article-title">Обо мне</h2>
      </header>

      <section className="about-text">
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

      <Skills />
    </article>
  );
}

export default About;
