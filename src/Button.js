function Button(props) {
  return (
    <button className="btn btn--sm btn--main" type="submit">
      {props.children}
    </button>
  );
}

export { Button };
