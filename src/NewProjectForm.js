import { Button } from "./Button";

function NewProjectForm(props) {
  return (
    <form className="form form--dark">
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
        <label htmlFor="image-url">Image URL</label>
        <input
          id="image-url"
          type="url"
          name="image-url-field"
          required="required"
        />
      </div>
      <Button>Create Project</Button>
    </form>
  );
}

export { NewProjectForm };
