/* eslint-disable react/no-array-index-key */
import './Portfolio.scss';
import { FiExternalLink } from 'react-icons/fi';
import projects from '../../data/projectData';

function Portfolio() {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Портфолио</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button type="button" className="active" data-filter-btn>
              Все
            </button>
          </li>

          <li className="filter-item">
            <button type="button" data-filter-btn>
              React
            </button>
          </li>

          <li className="filter-item">
            <button type="button" data-filter-btn>
              Vue
            </button>
          </li>

          <li className="filter-item">
            <button type="button" data-filter-btn>
              Тестовые задания
            </button>
          </li>

          <li className="filter-item">
            <button type="button" data-filter-btn>
              Frontend Mentor
            </button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button type="button" className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">{/* <ion-icon name="chevron-down"></ion-icon> */}</div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button type="button" data-select-item>
                All
              </button>
            </li>

            <li className="select-item">
              <button type="button" data-select-item>
                Web design
              </button>
            </li>

            <li className="select-item">
              <button type="button" data-select-item>
                Applications
              </button>
            </li>

            <li className="select-item">
              <button type="button" data-select-item>
                Web development
              </button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          {projects.map((project, index) => (
            <li className="project-item" key={index}>
              <figure className="project-img">
                <img src={project.image} alt={project.title} />
              </figure>
              <div className="project__info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tools">
                  {project.tools.map((disc, toolIndex) => (
                    <span className="project__tool" key={toolIndex}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className="project__links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img src="assets/svg/github.svg" alt="link to github page" width="28px" height="28px" />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <FiExternalLink size="28" color="white" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
