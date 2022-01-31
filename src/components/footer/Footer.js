import { Copyright } from "../UI/Copyright";
import { SocialNetwork } from "../UI/SocialNetwork";

function Footer() {
  return (
    <div className="container section footer__bottom">
      <Copyright>© 2022 Anastasia Drokina</Copyright>
      <ul className="socials">
        <li className="socials__item">
          <SocialNetwork
            target="_blank"
            rel="noopener"
            href="https://github.com/AnastasiaDrokin"
            title="Go to my Github"
            icon="github"
          ></SocialNetwork>
        </li>
        <li className="socials__item">
          <SocialNetwork
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/anastasia-drokina-dessomme/"
            title="Go to my Linkedin"
            icon="linkedin"
          ></SocialNetwork>
        </li>
        <li className="socials__item">
          <SocialNetwork
            target="_blank"
            rel="noopener"
            href="https://vk.com/id152972464"
            title="Go to my Vkontakte"
            icon="vk"
          ></SocialNetwork>
        </li>
        <li className="socials__item">
          <SocialNetwork
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/anastasiadrokinaa"
            title="Go to my facebook"
            icon="fb"
          ></SocialNetwork>
        </li>
      </ul>
    </div>
  );
}

export { Footer };
