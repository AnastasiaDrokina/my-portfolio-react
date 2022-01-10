import "./index.css";

function Button(props) {
  return (
    <button className="button" type="submit">
      {props.children}
    </button>
  );
}

export { Button };
