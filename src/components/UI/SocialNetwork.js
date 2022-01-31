function SocialNetwork(props) {
  return (
    <a
      className="socials__link"
      target={props.target}
      rel={props.rel}
      href={props.href}
      title={props.title}
    >
      {props.children}
      <span className="visually-hidden">{props.title}</span>
      <svg className="socials__icon">
        <use xlinkHref={`img/sprite_auto.svg#icon-${props.icon}`}></use>
      </svg>
    </a>
  );
}

export { SocialNetwork };
