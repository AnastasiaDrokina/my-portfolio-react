import { experiencesData } from "../../data/experiences-data";
import { TitleSecond } from "../UI/TitleSecond";

function Experience(props) {
  return (
    <div>
      <TitleSecond>Work experience</TitleSecond>
      <div className="skills__inner">
        {experiencesData.map((experience) => (
          <div key={experience.id}>
            <p className="skills__date">{experience.data}</p>
            <p className="skills__description">{experience.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Experience };
