import css from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>No feedback yet</p>
    </div>
  );
};

export default Notification;
