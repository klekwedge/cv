import { FiExternalLink } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import workHistory from "../../data/experienceData";
import "./Experience.scss";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="_title">Опыт</h2>
      <div className="_heading-decoration"></div>
      <div className="experience__main-cont">
        <div className="experience__container experience__timeline">
          {workHistory &&
            workHistory.map((work) => (
              <div className="experience__timeline-block" key={uuidv4()}>
                <div className="experience__timeline-img experience__picture"></div>
                <div className="experience__timeline-content work">
                  <h1 className="work__title">
                    {work?.companyName}
                    <span>
                      <a href={work.link} target="_blank" rel="noreferrer">
                        <FiExternalLink size="22" />
                      </a>
                    </span>
                  </h1>
                  <h4 className="work__role">
                    {work?.role}
                  </h4>

                  <div className="experience__content-info work__duration">
                    <h5>{work.duration}</h5>
                  </div>
                  <div className="work__des-list">
                    {work?.workDes &&
                      work.workDes.map((x) => (
                        <h4 className="work__des-item" key={uuidv4()}>
                          <span className="work__des-item-point">-</span> {x}
                        </h4>
                      ))}
                  </div>
                  <div className="work__tools">
                    {work?.exposer &&
                      work.exposer.map((ex, index) => (
                        <span
                          className="work__tool"
                          key={index}
                        >
                          {ex}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
