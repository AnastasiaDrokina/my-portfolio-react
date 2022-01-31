import { languagesData } from "../../data/languages-data";
import { TitleSecond } from "../UI/TitleSecond";

function Languages(props) {
  return (
    <div>
      <TitleSecond>{props.children}</TitleSecond>
      <div className="skills__inner">
        {languagesData.map((language) => (
          <div key={language.id}>
            <p className="skills__description">{language.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Languages };
