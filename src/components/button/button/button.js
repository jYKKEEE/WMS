import styles from "./button.module.scss";
import { Link } from "react-router-dom";

/*Buttoni palauttaa nappin, joka suorittaa propseina saadun 'action' function .
mikäli propseina annettu 'link' on urli niin Button toimii myös linkkinä*/
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
