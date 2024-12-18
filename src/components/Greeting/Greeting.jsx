import { NavLink } from "react-router-dom";
import css from "./Greeting.module.css";

const Greeting = () => {
  return (
    <div className={css.wrapper}>
      <div>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.desc}>
          You can find everything you want in our catalog
        </p>
        <NavLink to="/catalog" className={css.button}>
          View now
        </NavLink>
      </div>
    </div>
  );
};

export default Greeting;
