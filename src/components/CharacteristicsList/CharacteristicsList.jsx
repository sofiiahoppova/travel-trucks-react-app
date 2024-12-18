import clsx from "clsx";
import css from "./CharacteristicsList.module.css";

const CharacteristicsList = ({ camper }) => {
  const features = [
    { key: "transmission", label: "Automatic", icon: "icon-diagram" },
    { key: "engine", label: "Petrol", icon: "icon-fuel-pump" },
    { key: "AC", label: "AC", icon: "icon-wind" },
    { key: "bathroom", label: "Bathroom", icon: "icon-shower" },
    { key: "kitchen", label: "Kitchen", icon: "icon-cup-hot" },
    { key: "TV", label: "TV", icon: "icon-tv" },
    { key: "radio", label: "Radio", icon: "icon-radios" },
    { key: "refrigerator", label: "Refrigerator", icon: "icon-fridge" },
    {
      key: "microwave",
      label: "Microwave",
      icon: "icon-microwave",
      class: true,
    },
    { key: "gas", label: "Gas", icon: "icon-gas-stove", class: true },
    { key: "water", label: "Water", icon: "icon-water", class: true },
  ];

  const validFeatures = features.filter((feature) => camper[feature.key]);

  return (
    <ul className={css.list}>
      {validFeatures.map((feature) => {
        return (
          <li key={feature.key} className={css.item}>
            <svg
              width="20px"
              height="20px"
              className={clsx(feature.class && css.icon)}
            >
              <use href={"/sprite.svg#" + feature.icon}></use>
            </svg>
            <p className={css.label}>{feature.label}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CharacteristicsList;
