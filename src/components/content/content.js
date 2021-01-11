import styles from "./content.module.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <div className={styles.content}>
      <Link
        style={({ textDecoration: "none" }, { color: "white" })}
        to={"/settings"}
      >
        <SettingsIcon className={styles.icon} />
      </Link>
      {props.children}
    </div>
  );
}
export default Content;
