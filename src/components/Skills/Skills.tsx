import { Proficient, Familiar } from "./../../skillsData";

function Skills() {
  return (
    <>
      <div id="Skill">
        <section className="my-28  px-5">
          <header className="text-2xl font-bold pt-10 mb-5">
            <h2>Навыки и инструменты</h2>
          </header>
          {Proficient?.length > 0 && (
            <div className="pl-3">
              <h2 className="text-xl"> Опытный </h2>
              <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
                {Proficient.map((x, index) => (
                  <div
                    className="flex flex-col items-center"
                    tabIndex={0}
                    role="img"
                    aria-label={x.skill}
                    key={index}
                  >
                    <div className="mb-3"> {x.logo}</div>
                    {x.skill}
                  </div>
                ))}
              </div>
            </div>
          )}
          {Familiar?.length > 0 && (
            <div className="pl-3">
              <h2 className="text-xl"> Базовый </h2>
              <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
                {Familiar.map((x, index) => (
                  <div
                    className="flex flex-col items-center"
                    tabIndex={0}
                    role="img"
                    aria-label={x.skill}
                    key={index}
                  >
                    <div className="mb-3"> {x.logo}</div>

                    {x.skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* </div> */}
        </section>
      </div>
    </>
  );
}

export default Skills;
