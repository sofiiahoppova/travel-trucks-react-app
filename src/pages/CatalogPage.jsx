import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CamperList from "../components/CamperList/CamperList";
import FiltersForm from "../components/FiltersForm/FiltersForm";

import { fetchAllCampers } from "../redux/campers/operations";

import css from "./CatalogPage.module.css";
import { selectLoading } from "../redux/campers/selectors";
import Loader from "../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
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
        {isLoading ? <Loader /> : <CamperList handleClick={handleClick} />}
      </div>
    </div>
  );
};

export default CatalogPage;
