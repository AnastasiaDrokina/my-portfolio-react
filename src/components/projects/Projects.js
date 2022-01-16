import { Project } from "../projects/Project";
import { projectsData } from "../../data/projects-data";

function Projects(props) {
  return (
    <div className="portfolio__list">
      {projectsData.map((item) => (
        // 🐥 (extra credit 3) Do we really need all these props?
        <Project
          key={item.id}
          url={item.url}
          urlTitle={item.urlTitle}
          srcSet={item.srcSet}
          srcImage={item.srcImage}
          alt={item.alt}
          workTitle={item.workTitle}
          workSubtitle={item.workSubtitle}
          technologies={item.technologies}
          designed={item.designed}
        />
      ))}
    </div>
  );
}

export { Projects };
