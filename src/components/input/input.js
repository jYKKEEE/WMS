import styles from "./input.module.scss";

const Input = (props) => {
  const { text, value, onChange } = props;
  return (
    <div className={styles.form}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name="shellName"
        autoComplete="off"
        required
      />
      <label htmlFor="shellName" className={styles.label_name}>
        <span className={styles.content_name}>{text}</span>
      </label>
    </div>
  );
};
export default Input;
