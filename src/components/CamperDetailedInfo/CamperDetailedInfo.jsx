import CharacteristicsList from "../CharacteristicsList/CharacteristicsList";
import css from "./CamperDetailedInfo.module.css";

import camper from "/test.json";

const CamperDetailedInfo = () => {
  return (
    <div className={css.mainWrapper}>
      <CharacteristicsList camper={camper} />
      <div className={css.wrapper}>
        <h3 className={css.title}>Vehicle details</h3>
        <span className={css.line} />
        <ul className={css.list}>
          <li className={css.item}>
            <h4 className={css.subtitle}>Form</h4>
            <p>{camper.form}</p>
          </li>
          <li className={css.item}>
            <h4 className={css.subtitle}>Length</h4>
            <p>{camper.length}</p>
          </li>
          <li className={css.item}>
            <h4 className={css.subtitle}>Width</h4>
            <p>{camper.width}</p>
          </li>
          <li className={css.item}>
            <h4 className={css.subtitle}>Height</h4>
            <p>{camper.height}</p>
          </li>
          <li className={css.item}>
            <h4 className={css.subtitle}>Tank</h4>
            <p>{camper.tank}</p>
          </li>
          <li className={css.item}>
            <h4 className={css.subtitle}>Consumption</h4>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperDetailedInfo;
