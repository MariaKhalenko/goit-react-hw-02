import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.states}>
      <p className={css.option}>Good: {good}</p>
      <p className={css.option}>Neutral: {neutral}</p>
      <p className={css.option}>Bad: {bad}</p>
      <p className={css.option}>Total: {total}</p>
      <p className={css.option}>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
