import styles from "./addPage.module.scss";
import AddShelf from "../../shelf/addShelf";
import { Link } from "react-router-dom";

import Delete from "../delete";

function AddProduct(props) {
  const {
    shelfs,
    setShelfs,
    active,
    setProduct,
    messageHandler,
    setActive,
  } = props;

  return (
    <div>
      <h2>Shelf:</h2>
      <AddShelf
        shelfs={shelfs}
        setShelfs={setShelfs}
        messageHandler={messageHandler}
      />
      <h2>Slots:</h2>
      <Link to={`/shelfs`}>
        <button
          onClick={() => {
            setActive((prevState) => ({
              ...prevState,
              addSlot: true,
            }));
          }}
        >
          Add a new Slot
        </button>
      </Link>{" "}
      {/*add Slot toiminto*/}
      <h2>Product:</h2>
      <Link to="/addform">
        <button>New Product</button>
      </Link>
      <h2>Delete:</h2>
      <Delete setActive={setActive} />
    </div>
  );
}

export default AddProduct;
