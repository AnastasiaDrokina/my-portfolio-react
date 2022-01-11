import { Button } from "./Button";

function ContactForm(props) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name-field");
    const email = formData.get("email-field");
    const message = formData.get("textarea-field");

    console.log("FormData");
    console.log(`name: ${name}`);
    console.log("name:", name);
    console.log({ email });
    console.log({ message });
    // console.log(event.target.elements.name.value);
    // console.log(event.target.elements.email.value);
    // console.log(event.target.elements.textarea.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label className="visually-hidden" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name-field"
          required="required"
          placeholder="Name"
        />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email-field"
          required="required"
          placeholder="Email"
        />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="textarea">
          Your message
        </label>
        <textarea
          id="textarea"
          name="textarea-field"
          required="required"
          placeholder="Your message"
        ></textarea>
      </div>
      <Button>Submit</Button>
    </form>
  );
}

export { ContactForm };
