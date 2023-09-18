import { useEffect, useState } from 'react';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import filters from '../../data/filtersData';
import projects from '../../data/projectData';
import './Portfolio.scss';

function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [filterProjects, setFilterProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') {
      setFilterProjects(projects);
    } else {
      setFilterProjects([...projects.filter((project) => project.filter.includes(filter))]);
    }
  }, [filter]);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Портфолио</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filters.map((filterItem) => (
            <li className="filter-item" key={filterItem.value}>
              <button
                type="button"
                className={filter === filterItem.value ? 'active' : ''}
                onClick={() => setFilter(filterItem.value)}
              >
                {filterItem.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <select name="select" className="filter-select" onChange={(e) => setFilter(e.target.value)}>
            {filters.map((filterItem) => (
              <option className="select-item" key={filterItem.value} value={filterItem.value}>
                {filterItem.label}
              </option>
            ))}
          </select>
        </div>

        <ul className="project-list">
          {filterProjects.map((project) => (
            <li className="project-item" key={project.title}>
              <figure className="project-img">
                <img src={project.image} alt={project.title} />
              </figure>
              <div className="project__info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tools">
                  {project.tools.map((disc) => (
                    <span className="project__tool" key={disc}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className="project__links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <BsGithub size="22" color="white" />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <BsLink45Deg size="26" color="white" />
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
