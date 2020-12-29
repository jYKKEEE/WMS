import styles from "./menu.module.scss";
import AddIcon from "@material-ui/icons/Add";
import ShelfsIcon from "@material-ui/icons/ListAlt";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className={styles.menu}>
      <Link to="/add">
        <div>
          <AddIcon />
        </div>
      </Link>
      <Link to="/">
        <div>
          <SearchIcon />
        </div>
      </Link>
      <Link to="/shelfs">
        <div>
          <ShelfsIcon />
        </div>
      </Link>
    </div>
  );
}
export default Menu;
