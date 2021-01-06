import { Link } from "react-router-dom";
import messageHandler from "../../../notification/notification.js";
function addButton(props) {
  const { product, setActive, shelf, level, slot, messageHandler } = props;

  /*var hylly1 = {
    id: 1,
    slots: [
      {
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 0,
        slot: 1,
        products: [{ id: 65464, name: "jalka" }],
      },*/
  const handleProductState = () => {
    setActive((prevState) => ({
      ...prevState,
      add: false,
      edit: false,
      addSlot: false,
    }));
  };

  const addProductToSlot = () => {
    shelf.slots.map((mapSlot) => {
      if (mapSlot.level === level && mapSlot.slot === slot) {
        mapSlot.products.push({ id: product.id, name: product.name });
      }
    });
  };

  return (
    <Link to="/add">
      <div
        onClick={() => {
          addProductToSlot();
          handleProductState();
          messageHandler(
            `Added ${product.name} to shelf ${shelf.id}, slot: ${slot} level: ${level}`
          );
        }}
      >
        Add to this slot
      </div>
    </Link>
  );
}
export default addButton;
