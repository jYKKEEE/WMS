import React from 'react';
import styles from './notification.module.scss';

/*Ilmoitus komponentti. tulostaa sille annetun tekstin
Viesti tulostetaan app.js rivi ~205 funktiolla messageHandler*/
function Notification({ message }) {
  if (message === '') {
    return null;
  } else {
    return (
      <div className={styles.msg}>
        <h1 className={styles.h1}>
          <span className={styles.span}>{message}</span>
        </h1>
      </div>
    );
  }
}

export default Notification;
