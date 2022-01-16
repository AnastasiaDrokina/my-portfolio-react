import { BtnSpan } from "../UI/BtnSpan";

function Project(props) {
  // 🐥 (extra credit 3) You can uncomment the log to see where your data is with your last change
  // console.log(props)

  return (
    <article className="portfolio__item work">
      <a
        className="work__link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.url}
        title={props.title}
      >
        <picture>
          <source type="image/webp" srcSet={props.srcSet} />
          <img
            className="work__img"
            src={props.srcImage}
            width="378"
            height="432"
            alt={props.alt}
          />
        </picture>

        <div className="work__container">
          <div className="work__content">
            <h3 className="work__title">{props.workTitle}</h3>
            <p className="work__subtitle">{props.workSubtitle}</p>
            <h4>Technologies:</h4>
            <p>{props.technologies}</p>
            <h4>Designed by:</h4>
            <p>{props.designed}</p>
            <BtnSpan>Visit Website</BtnSpan>
          </div>
        </div>
      </a>
    </article>
  );
}

export { Project };
