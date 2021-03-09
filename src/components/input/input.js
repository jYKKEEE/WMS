import React from 'react';
import styles from './input.module.scss';

// tyylitelty input kenttä
const Input = (props) => {
  const { onChange, text, value } = props;
  return (
    <div className={styles.form}>
      <input
        value={value}
        onChange={onChange}
        type='text'
        name='shelName'
        autoComplete='off'
        required
      />
      <label htmlFor='shelName' className={styles.label_name}>
        <span className={styles.content_name}>{text}</span>
      </label>
    </div>
  );
};
export default Input;
