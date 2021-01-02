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
  const { shelfs, setAdding, activeShelf } = props;

  const addSlot = () => {
    console.log(`check`);
    shelfs[activeShelf].slots.push({
      barcode: Math.ceil(Math.random() * 9999999999),
      level: 0,
      slot: 5,
      products: [],
    });
  };
  // console.log(`${shelf[activeShelf]}  ${shelf[activeShelf].slots}`);

  return (
    <div>
      <h2>Slots:</h2>
      <Link to={`/shelfs`}>
        <button
          onClick={() => {
            setAdding({ edit: true });
          }}
        >
          Add a new Slot
        </button>
      </Link>
    </div>
  );
}
export default AddSlot;
