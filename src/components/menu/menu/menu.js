import styles from "./menu.module.scss";
import { Link } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import ShelfsIcon from "@material-ui/icons/ListAlt";
import SearchIcon from "@material-ui/icons/Search";

//Alapalkin navigointi toiminnot. Jokainen iconi muuttaa muokkaus tilat FALSEksi
function Menu({ setActive }) {
  const setActiveStatesToFalse = () => {
    setActive((prevState) => ({
      ...prevState,
      deleteProduct: false,
      deleteSlot: false,
      deleteShelf: false,
      temp: false,
      add: false,
    }));
  };
  return (
    <>
      <div
        className={styles.menu}
        onClick={() => {
          setActiveStatesToFalse();
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
