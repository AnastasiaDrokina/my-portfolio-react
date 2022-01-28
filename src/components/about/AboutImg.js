function AboutImg(props) {
  return (
    <div className="about__wrapper-img">
      <picture>
        <source
          type="image/webp"
          srcSet="https://picsum.photos/id/10/350/420"
        />
        <img
          className="work__img"
          src="https://picsum.photos/id/10/350/420"
          width="378"
          height="432"
          alt="Anastasia Drokina"
        />
      </picture>
    </div>
  );
}

export { AboutImg };
