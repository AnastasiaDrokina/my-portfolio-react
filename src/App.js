import { Projects } from "../src/components/projects/Projects";
import { Title } from "../src/components/UI/Title";
import { ContactForm } from "../src/components/form/ContactForm";
import { NewProjectForm } from "../src/components/form/NewProjectForm";

function App() {
  function handleProjectAdd(project) {
    console.log("FORM DATA (in <App/> received from <NewProjectForm />)");
    console.log(project);
  }

  return (
    <div>
      <main>
        <section className="portfolio section" id="work">
          <div className="container">
            <Title>Projects</Title>
            <NewProjectForm onProjectAdd={handleProjectAdd} />
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
