import { Link } from "react-router-dom";

import CharacteristicsList from "../CharacteristicsList/CharacteristicsList";

import css from "./CamperCard.module.css";
import { useState } from "react";

const CamperCard = ({ camper }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const handleClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <li className={css.itemWrapper}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={css.photo}
      />
      <div className={css.mainWrapper}>
        <div>
          <div className={css.blockWrapper}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.priceWrapper}>
              <p className={css.price}>&euro;{camper.price}.00</p>
              <button onClick={handleClick}>
                {isFavourite ? (
                  <svg width="26px" height="24px">
                    <use href="/sprite.svg#icon-heart"></use>
                  </svg>
                ) : (
                  <svg width="26px" height="24px">
                    <use href="/sprite.svg#icon-heart-pressed"></use>
                  </svg>
                )}
              </button>
            </div>
          </div>
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
        </div>
        <p className={css.description}>{camper.description}</p>
        <CharacteristicsList camper={camper} />
        <Link to={camper.id} className="accentButton">
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
