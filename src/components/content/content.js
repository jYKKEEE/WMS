import styles from "./content.module.scss";
import { Link } from "react-router-dom";

import SettingsIcon from "@material-ui/icons/Settings";

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
