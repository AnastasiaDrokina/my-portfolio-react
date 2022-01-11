import { Button } from "./Button";

function ContactForm(props) {
  function formSubmit(event) {
    const formData = new FormData(event.target);
    event.preventDefault();
    const name = formData.get("name-field");
    const email = formData.get("email-field");
    const message = formData.get("textarea-field");
    console.log(name, email, message);
    // console.log(event.target.elements.name.value);
    // console.log(event.target.elements.email.value);
    // console.log(event.target.elements.textarea.value);
  }

  return (
    <form onSubmit={formSubmit}>
      <div>
        <label className="visually-hidden" htmlFor="name">
          Name
        </label>
        <input id="name" type="text" name="name-field" placeholder="Name" />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="email">
          Email
        </label>
        <input id="email" type="email" name="email-field" placeholder="Email" />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="textarea">
          Your message
        </label>
        <textarea
          id="textarea"
          name="textarea-field"
          placeholder="Your message"
        ></textarea>
      </div>
      <Button>Submit</Button>
    </form>
  );
}

export { ContactForm };
