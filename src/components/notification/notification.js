import styles from "./notification.module.scss";

function Notification({ message }) {
  if (message === "") {
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
