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
      add: false,
      addSlot: false,
      deleteProduct: false,
      deleteSlot: false,
      deleteShelf: false,
      edit: false,
      temp: false,
    }));
  };
  return (
    <>
      <div className={styles.menu}>
        <Link
          style={({ textDecoration: "none" }, { color: "white" })}
          to="/add"
        >
          <AddIcon
            onClick={() => {
              setActiveStatesToFalse();
            }}
          />
        </Link>
        <Link style={({ textDecoration: "none" }, { color: "white" })} to="/">
          <SearchIcon
            onClick={() => {
              setActiveStatesToFalse();
            }}
          />
        </Link>
        <Link
          style={({ textDecoration: "none" }, { color: "white" })}
          to="/shelfs"
        >
          <ShelfsIcon
            onClick={() => {
              setActive((prevState) => ({
                ...prevState,
                add: false,
                deleteProduct: false,
                deleteSlot: false,
                deleteShelf: false,
                edit: false,
                temp: false,
              }));
            }}
          />
        </Link>
      </div>
    </>
  );
}
export default Menu;
