import styles from "./menu.module.scss";
import AddIcon from "@material-ui/icons/Add";
import ShelfsIcon from "@material-ui/icons/ListAlt";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

//Alapalkin navigointi toiminnot
function Menu({ setActive }) {
  const setDeletesToFalse = () => {
    setActive((prevState) => ({
      ...prevState,
      deleteProduct: false,
      deleteSlot: false,
      deleteShelf: false,
    }));
  };
  return (
    <div
      className={styles.menu}
      onClick={() => {
        setDeletesToFalse();
      }}
    >
      <Link to="/add">
        <AddIcon />
      </Link>
      <Link to="/">
        <SearchIcon />
      </Link>
      <Link to="/shelfs">
        <ShelfsIcon />
      </Link>
    </div>
  );
}
export default Menu;
