function Logo(props) {
  return (
    <a
      className="header__logo-link"
      href="https://anastasiadrokina.github.io/my-portfolio/"
      title="Return to portfolio of Anastasia Drokina"
    >
      <span class="visually-hidden">
        Return to portfolio of Anastasia Drokina
      </span>
      <svg class="header__logo">
        <use xlinkHref="img/sprite_auto.svg#icon-logo"></use>
      </svg>
    </a>
  );
}

export { Logo };
