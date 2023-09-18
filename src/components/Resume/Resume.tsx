// import './Resume.scss';
import workHistory from '../../data/experienceData';

function Resume() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Опыт работы</h2>
      </header>

      {/* <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"> <ion-icon name="book-outline"></ion-icon> </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">University school of the arts</h4>

            <span>2007 — 2008</span>

            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas
              molestias exceptur.
            </p>
          </li>

        </ol>
      </section> */}

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">{/* <ion-icon name="book-outline"></ion-icon> */}</div>
          <h3 className="h3">Опыт</h3>
        </div>

        <ol className="timeline-list">
          {workHistory.map((work) => (
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">{work.role}</h4>
              <span>{work.duration}</span>
              <p className="timeline-text">{work.workDes}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }} />
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '70%' }} />
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }} />
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '50%' }} />
            </div>
          </li>
        </ul>
      </section> */}
    </article>
  );
}

export default Resume;
