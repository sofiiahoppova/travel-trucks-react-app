import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./NavHeader.module.css";
import Logo from "../Logo/Logo";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const NavHeader = () => {
  return (
    <div className={css.navigation}>
      <Logo />
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
    </div>
  );
};

export default NavHeader;
