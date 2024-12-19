import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import clsx from "clsx";
import { FaArrowLeft } from "react-icons/fa";

import CamperMainInfo from "../components/CamperMainInfo/CamperMainInfo";
import BookingForm from "../components/BookingForm/BookingForm";
import Loader from "../components/Loader/Loader";

import { fetchCamperDetails } from "../redux/campers/operations";
import { selectLoading } from "../redux/campers/selectors";

import css from "./DetailsPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navlink, isActive && css.active);
};

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className={clsx("container", css.mainWrapper)}>
        <div>
          <Link to="/catalog">
            <div className={css.linkWrapper}>
              <FaArrowLeft className={css.arrow} /> <span>Go Back</span>
            </div>
          </Link>
          <CamperMainInfo />
        </div>
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
    </>
  );
};

export default DetailsPage;
