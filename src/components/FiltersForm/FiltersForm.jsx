import { useDispatch } from "react-redux";

import { changeFilter, emptyFilter } from "../../redux/filters/slice";
import { cleanFilters } from "../../utils/cleanFilters";

import css from "./FiltersForm.module.css";
import { resetCampers } from "../../redux/campers/slice";

const FiltersForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const elements = e.target.elements;

    const filters = {
      location: elements.location.value,
      form: elements.type.value,
      transmission: elements[1].checked && "automatic",
      AC: elements[2].checked,
      bathroom: elements[3].checked,
      kitchen: elements[4].checked,
      TV: elements[5].checked,
    };

    const cleanedFilters = cleanFilters(filters);

    dispatch(resetCampers());
    dispatch(emptyFilter());
    dispatch(changeFilter(cleanedFilters));
  };

  return (
    <form onSubmit={handleSubmit} className={css.mainWrapper}>
      <label className={css.labelWrapper}>
        <span className={css.label}>Location</span>
        <div className={css.inputWrapper}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="/sprite.svg#icon-map"></use>
          </svg>
          <input
            type="text"
            name="location"
            placeholder="City"
            className={css.input}
          />
        </div>
      </label>
      <div className={css.filersWrapper}>
        <h4 className={css.filersTitle}>Filters</h4>
        <div className={css.filterContainer}>
          <h3 className={css.title}>Vehicle equipment</h3>
          <span className={css.line} />
          <div className={css.blockWrapper}>
            <label className={css.wrapper}>
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-diagram"></use>
              </svg>
              <input
                type="checkbox"
                name="transmission"
                value="transmission"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Automatic</span>
            </label>
            <label className={css.wrapper}>
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
              <input
                type="checkbox"
                name="airConditioning"
                value="AC"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>AC</span>
            </label>
            <label className={css.wrapper}>
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-shower"></use>
              </svg>
              <input
                type="checkbox"
                name="bathroom"
                value="bathroom"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Bathroom</span>
            </label>
            <label className={css.wrapper}>
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-cup-hot"></use>
              </svg>
              <input
                type="checkbox"
                name="kitchen"
                value="kitchen"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Kitchen</span>
            </label>
            <label className={css.wrapper}>
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
              <input
                type="checkbox"
                name="television"
                value="TV"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>TV</span>
            </label>
          </div>
        </div>
        <div className={css.filterContainer}>
          <h3 className={css.title}>Vehicle type</h3>
          <span className={css.line} />
          <div className={css.blockWrapper}>
            <label className={css.wrapper}>
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-grid-1x2"></use>
              </svg>
              <input
                type="radio"
                name="type"
                value="panelTruck"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Van</span>
            </label>
            <label className={css.wrapper}>
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-grid-2x2"></use>
              </svg>
              <input
                type="radio"
                name="type"
                value="fullyIntegrated"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Fully Integrated</span>
            </label>
            <label className={css.wrapper}>
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-grid-3x3"></use>
              </svg>
              <input
                type="radio"
                name="type"
                value="alcove"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Alcove</span>
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="accentButton">
        Search
      </button>
    </form>
  );
};

export default FiltersForm;
