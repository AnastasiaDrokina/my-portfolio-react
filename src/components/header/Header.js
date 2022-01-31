import { Logo } from "../UI/Logo";
import { Navigation } from "../UI/Navigation";

function Header(props) {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__wrapper">
          <Logo />
          {/* <button className="header__toggle js-header-toggle" type="button">
            <span className="visually-hidden">Open menu</span>
          </button> */}
        </div>

        <nav className="header__nav js-header-nav">
          <ul className="header__list">
            <li className="header__item">
              <Navigation link="#work">Projects</Navigation>
            </li>
            <li className="header__item">
              <Navigation link="#about">About</Navigation>
            </li>
            <li className="header__item">
              <Navigation link="#skills">Skills</Navigation>
            </li>
            <li className="header__item">
              <Navigation link="#contacts">Contacts</Navigation>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
