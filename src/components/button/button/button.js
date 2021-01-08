import { StylesProvider } from "@material-ui/core";

import styles from "./button.module.scss";
import { Link } from "react-router-dom";
function Button(props) {
  const { text, link, action } = props;
  if (link === "") {
    return (
      <div>
        <div
          className={styles.button}
          onClick={() => {
            action();
          }}
        >
          <span>{text}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Link style={{ textDecoration: "none" }} to={link}>
          <div
            className={styles.button}
            onClick={() => {
              action();
            }}
          >
            <span>{text}</span>
          </div>
        </Link>
      </div>
    );
  }
}
export default Button;
