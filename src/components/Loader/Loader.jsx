import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{
        display: "block",
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass="color-ring-wrapper"
      colors={["#e44848", "#e15b64", "#f47e60", "#f8b26a", "#ffc531"]}
    />
  );
};

export default Loader;
