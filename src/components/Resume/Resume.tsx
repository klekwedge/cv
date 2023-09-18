import { IoBriefcaseOutline, IoBookOutline } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';
import workHistory from '../../data/experienceData';
import './Resume.scss';

function Resume() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Опыт работы</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBriefcaseOutline />
          </div>
          <h3 className="h3">Опыт</h3>
        </div>

        <ol className="timeline-list">
          {workHistory.map((work) => (
            <li className="timeline-item" key={uuidv4()}>
              <h4 className="h4 timeline-item-title">{work.role}</h4>
              <h4 className="h5">{work.companyName}</h4>
              <span>{work.duration}</span>
              <div className="timeline-text">
                {work.workDes.map((des) => (
                  <h4 className="work__des-item" key={uuidv4()}>
                    <span>-</span> {des}
                  </h4>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>

          <h3 className="h3">Образование</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Санкт-Петербургский политехнический университет Петра Великого</h4>

            <span>2020 — 2024</span>

            <p className="timeline-text">Институт компьютерных наук и технологий, Системный анализ и управление</p>
          </li>
        </ol>
      </section>
    </article>
  );
}

export default Resume;
