import styles from "./notification.module.scss";
function Notification({ message }) {
  if (message === "") {
    return null;
  } else {
    return <div className="notification_msg">{message}</div>;
  }
}

export default Notification;
