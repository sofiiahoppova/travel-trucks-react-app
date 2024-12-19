import css from "./CamperMainInfo.module.css";

import camper from "/test.json";

const CamperMainInfo = () => {
  return (
    <div className={css.wrapper}>
      <div>
        <h2 className={css.title}>{camper.name}</h2>
        <div className={css.info}>
          <div className={css.infoWrapper}>
            <svg width="16px" height="16px">
              <use href="/sprite.svg#icon-star-pressed"></use>
            </svg>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.infoWrapper}>
            <svg width="16px" height="16px">
              <use href="/sprite.svg#icon-map"></use>
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.price}>&euro;{camper.price}.00</p>
      </div>
      <ul className={css.list}>
        {camper.gallery.map((photo, i) => (
          <li key={i}>
            <img src={photo.original} alt="van photo" className={css.photo} />
          </li>
        ))}
      </ul>
      <p className={css.description}>{camper.description}</p>
    </div>
  );
};

export default CamperMainInfo;
