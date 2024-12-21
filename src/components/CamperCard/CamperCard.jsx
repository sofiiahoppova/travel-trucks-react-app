import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import CharacteristicsList from "../CharacteristicsList/CharacteristicsList";
import { selectFavouriteCampers } from "../../redux/campers/selectors";

import css from "./CamperCard.module.css";
import { addFavourite, removeFavourite } from "../../redux/campers/slice";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favouriteCampers = useSelector(selectFavouriteCampers);
  const [isFavourite, setIsFavourite] = useState(() => {
    if (favouriteCampers.find((item) => item.id === camper.id)) return true;
    return false;
  });

  const handleClick = () => {
    if (isFavourite) {
      setIsFavourite(false);
      dispatch(removeFavourite(camper.id));
    } else {
      setIsFavourite(true);
      dispatch(addFavourite(camper));
    }
  };

  const path = `${camper.id}/features`;
  const pathToReviews = `${camper.id}/reviews`;

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
                    <use href="/sprite.svg#icon-heart-pressed"></use>
                  </svg>
                ) : (
                  <svg width="26px" height="24px">
                    <use href="/sprite.svg#icon-heart"></use>
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
              <Link to={pathToReviews}>
                <p className={css.link}>
                  {camper.rating}({camper.reviews.length} Reviews)
                </p>
              </Link>
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
        <CharacteristicsList camper={camper} type={'short'} />
        <Link to={path} className="accentButton">
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
