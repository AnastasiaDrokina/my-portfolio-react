import { Project } from "../projects/Project";
import { projectsData } from "../../data/projects-data";

function Projects(props) {
  return (
    <div className="portfolio__list">
      {projectsData.map((project) => (
        <Project key={project.id} projectItem={project} />
      ))}
    </div>
  );
}

export { Projects };
