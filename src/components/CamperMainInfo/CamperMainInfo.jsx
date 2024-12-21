import { useSelector } from "react-redux";

import { selectCurrent } from "../../redux/campers/selectors";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import css from "./CamperMainInfo.module.css";

const CamperMainInfo = () => {
  const camper = useSelector(selectCurrent);

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
              {camper.rating}({camper.reviews && camper.reviews.length} Reviews)
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
      <SimpleBar style={{ maxWidth: "100%" }}>
        <ul className={css.list}>
          {camper.gallery &&
            camper.gallery.map((photo, i) => (
              <li key={i}>
                <img
                  src={photo.original}
                  alt="van photo"
                  className={css.photo}
                />
              </li>
            ))}
        </ul>
      </SimpleBar>
      <p className={css.description}>{camper.description}</p>
    </div>
  );
};

export default CamperMainInfo;
