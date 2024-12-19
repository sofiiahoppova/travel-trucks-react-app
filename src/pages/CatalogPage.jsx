import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import CamperList from "../components/CamperList/CamperList";
import FiltersForm from "../components/FiltersForm/FiltersForm";

import { fetchAllCampers } from "../redux/campers/operations";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("hi");
    dispatch(fetchAllCampers(page));
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <div className={css.wrapper}>
        <FiltersForm />
        <CamperList handleClick={handleClick} />
      </div>
    </div>
  );
};

export default CatalogPage;
