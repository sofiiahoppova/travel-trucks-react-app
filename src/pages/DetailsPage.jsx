import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

import CamperMainInfo from "../components/CamperMainInfo/CamperMainInfo";
import BookingForm from "../components/BookingForm/BookingForm";

import css from "./DetailsPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navlink, isActive && css.active);
};

const DetailsPage = () => {
  return (
    <div className={clsx("container", css.mainWrapper)}>
      <CamperMainInfo />
      <div>
        <nav className={css.nav}>
          <ul className={css.navlist}>
            <li>
              <NavLink to="features" className={buildLinkClass}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
        <span className={css.line} />
        <div className={css.wrapper}>
          <Outlet />
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
