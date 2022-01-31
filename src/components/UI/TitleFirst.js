function TitleFirst(props) {
  return (
    <h2 className={`title title--first ${props.color}`}>{props.children}</h2>
  );
}

export { TitleFirst };
