import styles from "./addPage.module.scss";
import AddShelf from "../shelf/addShelf";
import { Link } from "react-router-dom";
import AddSlot from "../slot/addSlot";

function AddProduct(props) {
  const { shelfs, setShelfs, active, setProduct, messageHandler } = props;

  return (
    <div>
      <AddShelf
        shelfs={shelfs}
        setShelfs={setShelfs}
        messageHandler={messageHandler}
      />
      <h2>Slots:</h2>
      <AddSlot shelfs={shelfs} active={active} setProduct={setProduct} />

      <h2>Product:</h2>

      <Link to="/addform">
        <button>New Product</button>
      </Link>
    </div>
  );
}

export default AddProduct;
