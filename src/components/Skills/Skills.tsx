import { Proficient, Familiar } from "../../data/skillsData";
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="h3">Навыки и инструменты</h2>
      {Proficient?.length > 0 && (
        <div className="skills__experienced experienced">
          <h2 className="experienced__title"> Опытный </h2>
          <div className="experienced__list">
            {Proficient.map((x, index) => (
              <div
                className="experienced__item"
                tabIndex={0}
                role="img"
                aria-label={x.skill}
                key={index}
              >
                <img src={x.logo} alt={x.logo} width="60" height="60" />
                {x.skill}
              </div>
            ))}
          </div>
        </div>
      )}
      {Familiar?.length > 0 && (
        <div className="skills__basic basic">
          <h2 className="basic__title"> Базовый </h2>
          <div className="basic__list">
            {Familiar.map((x, index) => (
              <div
                className="basic__item"
                tabIndex={0}
                role="img"
                aria-label={x.skill}
                key={index}
              >
                <img src={x.logo} alt={x.logo} width="60" height="60" />

                {x.skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
