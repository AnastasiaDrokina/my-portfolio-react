import { BtnSpan } from "../UI/BtnSpan";

function Project(props) {
  console.log(props);

  return (
    <article className="portfolio__item work">
      <a
        className="work__link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.projectItem.url}
        title={`Go to ${props.projectItem.workTitle}`}
      >
        <picture>
          <source type="image/webp" srcSet={props.projectItem.srcSet} />
          <img
            className="work__img"
            src={props.projectItem.srcImage}
            width="378"
            height="432"
            alt={props.projectItem.workTitle}
          />
        </picture>

        <div className="work__container">
          <div className="work__content">
            <h3 className="work__title">{props.projectItem.workTitle}</h3>
            <p className="work__subtitle">{props.projectItem.workSubtitle}</p>
            <h4>Technologies:</h4>
            <p>{props.projectItem.technologies}</p>
            <h4>Designed by:</h4>
            <p>{props.projectItem.designed}</p>
            <BtnSpan>Visit Website</BtnSpan>
          </div>
        </div>
      </a>
    </article>
  );
}

export { Project };
