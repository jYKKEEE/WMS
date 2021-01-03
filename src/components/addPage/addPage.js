import styles from "./addPage.module.scss";
import AddShelf from "../shelf/addShelf";
import { Link } from "react-router-dom";
import AddSlot from "../slot/addSlot";

function AddProduct(props) {
  const { shelfs, setShelfs, active, setProduct } = props;
  const newShelfHandler = () => {
    //1.kysy hyllynumero kunnes antaa numeron tai painaa peruuta
    var shelfNumber = prompt(`Adding action missing..`);
    // addNewShell true:lla pääsee läpi false ei tee mitään
  };
  return (
    <div>
      <AddShelf shelfs={shelfs} setShelfs={setShelfs} />
      <h2>Slots:</h2>
      <AddSlot shelfs={shelfs} active={active} setProduct={setProduct} />

      <h2>Product:</h2>
      <button
        onClick={() => {
          newShelfHandler();
        }}
      >
        Quick add
      </button>
      <Link to="/addform">
        <button>New Product</button>
      </Link>
    </div>
  );
}

export default AddProduct;