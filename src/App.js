import { Projects } from "./Projects";
import { Title } from "./Title";
import { ContactForm } from "./ContactForm";
import { NewProjectForm } from "./NewProjectForm";

function App() {
  return (
    <div>
      <main>
        <section className="portfolio section" id="work">
          <div className="container">
            <Title>Projects</Title>
            <NewProjectForm />
            <Projects />
          </div>
        </section>
      </main>

      <footer className="footer contacts" id="contacts">
        <div className="container section contacts__form">
          <div className="contacts__col">
            <h2 className="title title--section title--first title-white">
              Write to me
            </h2>
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
