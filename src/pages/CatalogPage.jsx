import CamperList from "../components/CamperList/CamperList";
import FiltersForm from "../components/FiltersForm/FiltersForm";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <FiltersForm />
        <CamperList />
      </div>
    </div>
  );
};

export default CatalogPage;
