import { TitleFirst } from "../src/components/UI/TitleFirst";
import { TitleSecond } from "../src/components/UI/TitleSecond";
import { AboutMeContent } from "../src/components/about/AboutMeContent";
import { AboutImg } from "../src/components/about/AboutImg";
import { Projects } from "../src/components/projects/Projects";
import { ContactForm } from "../src/components/form/ContactForm";
import { Experience } from "./components/experience/Experience";
// import { NewProjectForm } from "../src/components/form/NewProjectForm";
function App() {
  // function handleProjectAdd(project) {
  //   console.log("FORM DATA (in <App/> received from <NewProjectForm />)");
  //   console.log(project);
  // }

  return (
    <div>
      <main>
        <section className="leading section">
          <div className="container">
            <div className="leading__wrapper">
              <div className="leading__info">
                <p className="leading__profession">front-end developer</p>
                <TitleFirst>Hello, my name is Anastasia Drokina</TitleFirst>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio section" id="work">
          <div className="container">
            <TitleSecond>Projects</TitleSecond>
            {/* <NewProjectForm onProjectAdd={handleProjectAdd} /> */}
            <Projects />
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about__container">
            <AboutMeContent />
            <AboutImg />
          </div>
          <div className="skills" id="skills">
            <div className="container">
              <div className="skills__col">
                <Experience />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer contacts" id="contacts">
        <div className="container section contacts__form">
          <div className="contacts__col">
            <TitleFirst className="title-white">Write to me</TitleFirst>
            <p className="section__text title-white">
              I’m always up for adventure and international opportunities.
            </p>
            <p className="title-white">Let's have a talk.</p>
          </div>
          <div className="contacts__col">
            <ContactForm />
          </div>
        </div>
      </footer>
    </div>
  );
}

export { App };
