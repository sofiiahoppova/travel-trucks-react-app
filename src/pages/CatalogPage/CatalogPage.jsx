import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CamperList from "../../components/CamperList/CamperList";
import FiltersForm from "../../components/FiltersForm/FiltersForm";

import { fetchAllCampers } from "../../redux/campers/operations";
import { selectFilter } from "../../redux/filters/selectors";
import { selectError } from "../../redux/campers/selectors";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCampers(filters));
  }, [dispatch, filters]);

  return (
    <div className="container">
      <div className={css.wrapper}>
        <FiltersForm />
        {error ? (
          <p className={css.message}>
            Sorry! We didn't find any campers matching your request
          </p>
        ) : (
          <CamperList />
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
