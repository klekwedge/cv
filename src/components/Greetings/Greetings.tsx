import TypeIt from "typeit-react";

function Greetings() {
  return (
    <section className="main__greetings greetings">
      <div className="greetings__container _container">
        <TypeIt className="greetings__name">
          Привет, меня зовут Андрей 👋
        </TypeIt>
        <h3 className="greetings__qualification _anim-item text-focus-in">
          Front-End разработчик
        </h3>
        <div className="greetings__buttons">
          <a
            className="greetings__button"
            href="mailto:antonov.andrey.10101@gmail.com"
          >
            <img src="./assets/svg/mail-icon.svg" /> Напишите мне
          </a>
          <a
            className="greetings__button"
            download
            href="https://drive.google.com/uc?export=download&id=1i1ZHM3vLGijkXt9ESaDDWNdqQ4dHJOHT"
            title="Download CV in PDF format"
          >
            <img src="./assets/svg/download-icon.svg" />
            Скачать резюме
          </a>
        </div>
      </div>
      <div className="greetings__image _ibg">
        <img src="assets/img/bg.jpg" alt="Background photo" />
      </div>
    </section>
  );
}

export default Greetings;
