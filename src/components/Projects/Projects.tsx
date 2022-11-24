import { FiExternalLink } from "react-icons/fi";
import projects from "../../data/projectData";
import { GITHUB_USERNAME } from "../../data/variables";
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="_title">Проекты</h2>
      <div className="_heading-decoration"></div>
      <div className="projects__list">
        {projects.map((project, index) => (
          <article className="projects__item project" key={index}>
            <picture
              className={
                index % 2 === 0
                  ? "project__image"
                  : "_order project__image"
              }
            >
              <img src={project.image} alt={project.title} />
            </picture>
            <div className="project__info">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <div className="project__tools">
                {project.tools.map((disc, index) => (
                  <span className="project__tool" key={index}>
                    {disc}
                  </span>
                ))}
              </div>
              <div className="project__links">
                <a href={project.github} target="_blank">
                  <img
                    src="assets/svg/github.svg"
                    alt="link to github page"
                    width="24px"
                    height="24px"
                  />
                </a>
                <a href={project.link} target="_blank">
                  <FiExternalLink size="24" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-5">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          className="projects__button"
        >
          <span>See more on Github</span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
