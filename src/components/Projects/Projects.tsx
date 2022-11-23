import { FiExternalLink } from "react-icons/fi";
import projects from "../../data/projectData";
import { GITHUB_USERNAME } from "../../data/variables";
import "./Projects.scss";

function Projects() {
  return (
    <section className="my-30 px-5" id="projects">
      <h2 className="_title">Проекты</h2>
      <div className="_heading-decoration"></div>

      <div className="my-7 space-y-40">
        {projects.map((project, index) => (
          <article className="flex flex-wrap md:justify-between" key={index}>
            <picture
              className={
                index % 2 === 0
                  ? "w-full md:w-6/12 shadow-lg "
                  : "w-full md:w-6/12 shadow-lg md:order-1"
              }
            >
              <img src={project.image} alt={project.title} />
            </picture>
            <div className="flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ">
              <h3 className="uppercase font-bold text-lg">{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex overflow-auto space-x-3 pb-2 md:flex-wrap">
                {project.tools.map((disc, index) => (
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg mt-2 text-sm"
                    key={index}
                  >
                    {disc}
                  </span>
                ))}
              </div>
              <div className="w-auto flex space-x-5 relative ">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img
                    src="/public/assets/svg/github.svg"
                    alt="link to github page"
                    width="24px"
                    height="24px"
                  />
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
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
          rel="noreferrer"
          className="bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto"
        >
          <span>See more on Github</span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
