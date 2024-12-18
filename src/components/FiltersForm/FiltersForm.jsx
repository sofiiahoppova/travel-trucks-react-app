import css from "./FiltersForm.module.css";

const FiltersForm = () => {
  return (
    <form className={css.mainWrapper}>
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
            <label className={css.wrapper} htmlFor="transmission">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-diagram"></use>
              </svg>
              <input
                type="checkbox"
                id="transmission"
                name="equipment"
                value="transmission"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Automatic</span>
            </label>

            <label className={css.wrapper} htmlFor="engine">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-fuel-pump"></use>
              </svg>
              <input
                type="checkbox"
                id="engine"
                name="equipment"
                value="engine"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Engine</span>
            </label>

            <label className={css.wrapper} htmlFor="AC">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
              <input
                type="checkbox"
                id="AC"
                name="equipment"
                value="AC"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>AC</span>
            </label>

            <label className={css.wrapper} htmlFor="bathroom">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-shower"></use>
              </svg>
              <input
                type="checkbox"
                id="bathroom"
                name="equipment"
                value="bathroom"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Bathroom</span>
            </label>

            <label className={css.wrapper} htmlFor="kitchen">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-cup-hot"></use>
              </svg>
              <input
                type="checkbox"
                id="kitchen"
                name="equipment"
                value="kitchen"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Kitchen</span>
            </label>

            <label className={css.wrapper} htmlFor="TV">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
              <input
                type="checkbox"
                id="TV"
                name="equipment"
                value="TV"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>TV</span>
            </label>
          </div>
          {/* <li>
                <label className={css.wrapper}>
                  <svg width="32px" height="32px">
                    <use href="/sprite.svg#icon-radios"></use>
                  </svg>
                  <input type="checkbox" name="equipment" value="radio" />
                  <span>Radio</span>
                </label>
              </li>
              <li>
                <label className={css.wrapper}>
                  <svg width="32px" height="32px">
                    <use href="/sprite.svg#icon-fridge"></use>
                  </svg>
                  <input
                    type="checkbox"
                    name="equipment"
                    value="refrigerator"
                  />
                  <span>Refrigerator</span>
                </label>
              </li>
              <li>
                <label className={css.wrapper}>
                  <svg width="32px" height="32px">
                    <use href="/sprite.svg#icon-microwave"></use>
                  </svg>
                  <input type="checkbox" name="equipment" value="microwave" />
                  <span>Microwave</span>
                </label>
              </li>
              <li>
                <label className={css.wrapper}>
                  <svg width="32px" height="32px">
                    <use href="/sprite.svg#icon-gas-stove"></use>
                  </svg>
                  <input type="checkbox" name="equipment" value="gas" />
                  <span>Gas</span>
                </label>
              </li>
              <li>
                <label className={css.wrapper}>
                  <svg width="32px" height="32px">
                    <use href="/sprite.svg#icon-water"></use>
                  </svg>
                  <input type="checkbox" name="equipment" value="water" />
                  <span>Water</span>
                </label>
              </li> */}
        </div>
        <div className={css.filterContainer}>
          <h3 className={css.title}>Vehicle type</h3>
          <span className={css.line} />
          <div className={css.blockWrapper}>
            <label className={css.wrapper} htmlFor="van">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-grid-1x2"></use>
              </svg>
              <input
                type="radio"
                id="van"
                name="type"
                value="van"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Van</span>
            </label>
            <label className={css.wrapper} htmlFor="fullyIntegrated">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-grid-2x2"></use>
              </svg>
              <input
                type="radio"
                id="fullyIntegrated"
                name="type"
                value="fullyIntegrated"
                className={css.hiddenCheckbox}
              />
              <span className={css.checkboxLabel}>Fully Integrated</span>
            </label>
            <label className={css.wrapper} htmlFor="alcove">
              <svg width="32px" height="32px" className={css.iconCheckbox}>
                <use href="/sprite.svg#icon-grid-3x3"></use>
              </svg>
              <input
                type="radio"
                id="alcove"
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
