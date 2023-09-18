/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import projects from '../../data/projectData';
import './Portfolio.scss';

function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [filterProjects, setFilterProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') {
      setFilterProjects(projects);
    } else {
      setFilterProjects([...projects.filter((project) => project.filter === filter)]);
    }
  }, [filter]);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Портфолио</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button type="button" className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
              Все
            </button>
          </li>

          <li className="filter-item">
            <button type="button" className={filter === 'react' ? 'active' : ''} onClick={() => setFilter('react')}>
              React
            </button>
          </li>

          {/* <li className="filter-item">
            <button type="button" className={filter === 'vue' ? 'active' : ''} onClick={() => setFilter('vue')}>
              Vue
            </button>
          </li> */}

          <li className="filter-item">
            <button type="button" className={filter === 'test' ? 'active' : ''} onClick={() => setFilter('test')}>
              Тестовые задания
            </button>
          </li>

          {/* <li className="filter-item">
            <button type="button" className={filter === 'fm' ? 'active' : ''} onClick={() => setFilter('fm')}>
              Frontend Mentor
            </button>
          </li> */}

          <li className="filter-item">
            <button type="button" className={filter === 'js' ? 'active' : ''} onClick={() => setFilter('js')}>
              Native JS
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
          {filterProjects.map((project, index) => (
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
