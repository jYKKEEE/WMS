import styles from "./menu.module.scss";
import AddIcon from "@material-ui/icons/Add";
import ShelfsIcon from "@material-ui/icons/ListAlt";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

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
    <div className={styles.menu}>
      <Link to="/add">
        <div
          onClick={() => {
            setDeletesToFalse();
          }}
        >
          <AddIcon />
        </div>
      </Link>
      <Link to="/">
        <div
          onClick={() => {
            setDeletesToFalse();
          }}
        >
          <SearchIcon />
        </div>
      </Link>
      <Link to="/shelfs">
        <div
          onClick={() => {
            setDeletesToFalse();
          }}
        >
          <ShelfsIcon />
        </div>
      </Link>
    </div>
  );
}
export default Menu;
