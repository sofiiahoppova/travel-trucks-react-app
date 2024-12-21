import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { FaArrowUp } from "react-icons/fa";
import CamperCard from "../CamperCard/CamperCard";
import Loader from "../Loader/Loader";

import { fetchAllCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectLoading,
  selectTotal,
} from "../../redux/campers/selectors";
import { selectFilter } from "../../redux/filters/selectors";

import css from "./CamperList.module.css";

const CamperList = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const filters = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    setLimit(4);
  }, [filters]);

  const handleClick = () => {
    if (limit < total) {
      setLimit(limit + 4);
      dispatch(fetchAllCampers({ limit: limit + 4, ...filters }));
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <ul className={css.list}>
        {campers &&
          campers.map((camper) => {
            return <CamperCard key={camper.id} camper={camper} />;
          })}
      </ul>
      <div className={css.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button
              className={clsx("button", css.button)}
              onClick={handleClick}
              disabled={limit >= total}
            >
              Load More
            </button>
            {isVisible && (
              <a href="#" className={css.buttonUp}>
                <FaArrowUp className={css.arrow} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CamperList;
