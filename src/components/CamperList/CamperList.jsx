import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

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

let limit = 4;
let averageLimit = 4;

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const filters = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  const handleClick = () => {
    if (limit < total) {
      limit += averageLimit;
      dispatch(fetchAllCampers({ limit, ...filters }));
    }
    console.log(limit);
  };

  return (
    <div>
      <ul className={css.list}>
        {campers &&
          campers.map((camper) => {
            return <CamperCard key={camper.id} camper={camper} />;
          })}
      </ul>
      {isLoading && <Loader />}
      <button
        className={clsx("button", css.button)}
        onClick={handleClick}
        disabled={limit >= total}
      >
        Load More
      </button>
    </div>
  );
};

export default CamperList;
