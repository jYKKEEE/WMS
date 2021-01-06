import styles from "./delete.module.scss";
import { Link } from "react-router-dom";

function Delete({ setActive }) {
  /*const setDeleteShelf = () =>{
        setActive(prevstate => ...prevstate, delete)
    }
    const setDelete = () =>{
        setActive(prevstate => ...prevstate, delete)
    }
    const setDelete = () =>{
        setActive(prevstate => ...prevstate, delete)
    }*/

  return (
    <div className={styles.buttons}>
      <Link to="/shelfs">
        <button
          onClick={() => {
            setActive((prevState) => ({
              ...prevState,
              deleteShelf: true,
            }));
          }}
        >
          Shelfs
        </button>
      </Link>
      <Link to="/shelfs">
        <button
          onClick={() => {
            setActive((prevState) => ({
              ...prevState,
              deleteSlot: true,
            }));
          }}
        >
          Slots
        </button>
      </Link>
      <Link to="/shelfs">
        <button
          onClick={() => {
            setActive((prevState) => ({
              ...prevState,
              deleteProduct: true,
            }));
          }}
        >
          Products
        </button>
      </Link>
    </div>
  );
}
export default Delete;
