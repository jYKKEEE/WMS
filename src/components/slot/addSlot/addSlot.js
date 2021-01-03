import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./addSlot.module.scss";

/* var hylly1 = {
    id: 1,
    slots: [{
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 0,
        slot: 1,
        products: [{ id: 65464, name: "jalka" }],
      },*/

function AddSlot(props) {
  const { shelfs, setProduct, active } = props;

  const handle = () => {};

  // console.log(`${shelf[activeShelf]}  ${shelf[activeShelf].slots}`);

  return (
    <div>
      <Link to={`/shelfs`}>
        <button
          onClick={() => {
            setProduct((prevState) => ({
              ...prevState,
              addSlot: true,
            }));
          }}
        >
          Add a new Slot
        </button>
      </Link>
    </div>
  );
}

export default AddSlot;
