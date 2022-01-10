import { Project } from "./Project";
import { projectsData } from "./projects-data";

function Projects(props) {
  return (
    <div className="portfolio__list">
      {projectsData.map((item) => (
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
