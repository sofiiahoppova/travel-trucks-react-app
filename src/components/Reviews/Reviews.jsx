import { useSelector } from "react-redux";
import { selectCurrent } from "../../redux/campers/selectors";

import css from "./Reviews.module.css";

const Reviews = () => {
  const camper = useSelector(selectCurrent);

  return (
    <ul className={css.list}>
      {camper.reviews &&
        camper.reviews.map((review, i) => {
          const stars = Array.from({ length: 5 }, (_, index) => {
            return index < review.reviewer_rating ? (
              <svg key={index} width="16px" height="16px">
                <use href="/sprite.svg#icon-star-pressed" />
              </svg>
            ) : (
              <svg key={index} width="16px" height="16px">
                <use href="/sprite.svg#icon-star" />
              </svg>
            );
          });
          return (
            <li key={i} className={css.item}>
              <div className={css.blockWrapper}>
                <div className={css.avatar}>{review.reviewer_name[0]}</div>
                <div>
                  <h4 className={css.title}>{review.reviewer_name}</h4>
                  <span className={css.starsList}>{stars}</span>
                </div>
              </div>
              <p className={css.desc}>{review.comment}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
