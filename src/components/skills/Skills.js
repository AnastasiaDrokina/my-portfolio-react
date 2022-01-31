import { skillsData } from "../../data/skills-data";
import { TitleSecond } from "../UI/TitleSecond";

console.log(skillsData);
function Skills(props) {
  return (
    <div>
      <TitleSecond>{props.children}</TitleSecond>
      <div className="skills__inner">
        {skillsData.map((skill) => (
          <div key={skill.id}>
            <p className="skills__description">{skill.language}</p>
            <p className="skills__description">{skill.language}</p>
            <p className="skills__description">{skill.versioning}</p>
            <p className="skills__description">{skill.other}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Skills };
