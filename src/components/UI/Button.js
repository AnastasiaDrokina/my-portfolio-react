function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="btn btn--sm btn--main"
      type={props.type}
    >
      {props.children}
    </button>
  );
}

export { Button };
