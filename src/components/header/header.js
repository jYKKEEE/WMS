import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import SettingsIcon from "@material-ui/icons/Settings";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Warehouse management system</h1>
    </div>
  );
}
export default Header;
