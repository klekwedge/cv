import { Proficient, Familiar } from "../../data/skillsData";
import "./Skills.scss";

function Skills() {
  return (
    <section className="my-28  px-5" id="skills">
      <h2 className="_title">Навыки и инструменты</h2>
      <div className="_heading-decoration"></div>

      {Proficient?.length > 0 && (
        <div className="pl-3">
          <h2 className="text-2xl"> Опытный </h2>
          <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
            {Proficient.map((x, index) => (
              <div
                className="flex flex-col items-center"
                tabIndex={0}
                role="img"
                aria-label={x.skill}
                key={index}
              >
                <div className="mb-3">
                  <img src={x.logo} alt={x.logo} width="60" height="60" />
                </div>
                {x.skill}
              </div>
            ))}
          </div>
        </div>
      )}
      {Familiar?.length > 0 && (
        <div className="pl-3">
          <h2 className="text-2xl"> Базовый </h2>
          <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
            {Familiar.map((x, index) => (
              <div
                className="flex flex-col items-center"
                tabIndex={0}
                role="img"
                aria-label={x.skill}
                key={index}
              >
                <div className="mb-3">
                  <img src={x.logo} alt={x.logo} width="60" height="60" />
                </div>

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
