import styles from "./cancel.module.scss";
import { Link } from "react-router-dom";

function Cancel({ active, setActive }) {
  const cancel = () => {
    setActive((prevState) => ({
      ...prevState,
      deleteProduct: false,
      deleteSlot: false,
      deleteShelf: false,
      edit: false,
      add: false,
      addSlot: false,
    }));
  };

  if (
    active.deleteProduct ||
    active.deleteSlot ||
    active.deleteShelf ||
    active.edit ||
    active.add ||
    active.addSlot
  ) {
    return (
      <div>
        <Link to="/add">
          <button
            onClick={() => {
              cancel();
            }}
          >
            Cancel
          </button>
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
}
export default Cancel;
