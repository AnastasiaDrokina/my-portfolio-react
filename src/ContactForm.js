import { Button } from "./Button";

function ContactForm(props) {
  return (
    <form method="post">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name-field" placeholder="Name" />
      </div>
      <Button>Submit</Button>
    </form>
  );
}

export { ContactForm };
