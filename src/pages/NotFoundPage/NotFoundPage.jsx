import css from "./NotFountPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h2>404 - Page Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a href="/" className="accentButton">
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFoundPage;
