import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCampers } from "../../redux/campers/selectors";
import CamperCard from "../CamperCard/CamperCard";

import css from "./CamperList.module.css";

// import campers from "/test.json";
import clsx from "clsx";

const CamperList = ({ handleClick }) => {
  const campers = useSelector(selectCampers);

  return (
    <div>
      <ul className={css.list}>
        {campers &&
          campers.map((camper) => {
            return <CamperCard key={camper.id} camper={camper} />;
          })}
      </ul>
      <button className={clsx("button", css.button)} onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default CamperList;
