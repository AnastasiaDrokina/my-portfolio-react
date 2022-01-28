function BtnLink(props) {
  return (
    <a
      className="btn btn--main btn--sm"
      target={props.target}
      rel={props.rel}
      href={props.href}
    >
      {props.children}
    </a>
  );
}

export { BtnLink };
