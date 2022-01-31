function Navigation(props) {
  return (
    <a className="header__link js-header-link" href={props.link}>
      <span className="visually-hidden">Go to &nbsp;</span>
      {props.children}
    </a>
  );
}

export { Navigation };
