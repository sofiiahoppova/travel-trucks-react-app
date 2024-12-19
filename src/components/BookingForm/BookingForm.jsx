import clsx from "clsx";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <div className={css.mainWrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.desc}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.formWrapper}>
        <div className={css.inputsWrapper}>
          <input type="text" name="name" placeholder="Name*" />
          <input type="email" name="email" placeholder="Email*" />
          <input
            placeholder="Booking date*"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            id="date"
            name="bookingDate"
          />
          <textarea
            className={css.comment}
            name="comment"
            placeholder="Comment"
          />
        </div>
        <button type="submit" className={clsx("accentButton", css.button)}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
