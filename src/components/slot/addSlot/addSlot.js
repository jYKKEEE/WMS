import { Add } from "@material-ui/icons";

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
  const { shelf, setShelf, activeShelf } = props;

  return (
    <button
      onClick={() => {
        alert(`toiminto puuttuu!`);
      }}
    >
      Add a new Slot
    </button>
  );
}
export default AddSlot;
