import { BtnLink } from "../UI/BtnLink";
import { TitleSecond } from "../UI/TitleSecond";

function AboutMeContent(props) {
  return (
    <div>
      <TitleSecond>About me</TitleSecond>
      <p className="section__text">
        I love snow, winter and tea, because I come from Russia! <br />I studied
        law in Russia, and I moved to France 5 years ago. During this time,I
        managed to learn French and find my new passion for bringing ideas to
        life in the browser.
      </p>
      <p className="section__text">
        I like to code things from scratch, build for an optimal user experience
        and test it on any device. I would be glad to share with you my love for
        front-end development.
      </p>
      <BtnLink
        target="_blank"
        rel="noopener"
        href="files/cv-anastasia-drokina.pdf"
      >
        Download my CV
        <span class="visually-hidden">Pdf, 154Ko, open in new window</span>
      </BtnLink>
    </div>
  );
}

export { AboutMeContent };
