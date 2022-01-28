import { Button } from "../UI/Button";
import * as React from "react";

function NewProjectForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get("title-field");
    const description = formData.get("description-field");
    const link = formData.get("link-field");
    const imageUrl = formData.get("imageUrl-field");

    const project = {
      title: title,
      description: description,
      link: link,
      imageUrl: imageUrl
    };

    props.onProjectAdd(project);
  }

  const [text, setText] = React.useState("");

  return (
    <form className="form form--dark" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title-field" required="required" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description-field"
          required="required"
        ></textarea>
      </div>
      <div>
        <label htmlFor="link">Link to the project</label>
        <input id="link" type="url" name="link-field" required="required" />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          type="url"
          name="imageUrl-field"
          required="required"
        />
      </div>
      <Button onClick={() => setText("Sent !")} type="submit">
        Create Project
      </Button>
      <p>{text}</p>
    </form>
  );
}

export { NewProjectForm };
