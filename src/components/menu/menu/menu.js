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
    <>
      <div
        className={styles.menu}
        onClick={() => {
          setDeletesToFalse();
        }}
      >
        <Link
          style={({ textDecoration: "none" }, { color: "white" })}
          to="/add"
        >
          <AddIcon />
        </Link>
        <Link style={({ textDecoration: "none" }, { color: "white" })} to="/">
          <SearchIcon />
        </Link>
        <Link
          style={({ textDecoration: "none" }, { color: "white" })}
          to="/shelfs"
        >
          <ShelfsIcon />
        </Link>
      </div>
    </>
  );
}
export default Menu;
