import { Link } from "react-router-dom";
import styles from "./addButton.module.scss";
import Button from "../../../button/button";

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
    <div className={styles.addButton}>
      Add product:
      <Button
        text={`${product.name}`}
        link={"/add"}
        action={() => {
          addProductToSlot();
          handleProductState();
          messageHandler(
            `Added ${product.name} to shelf ${shelf.id}, slot: ${slot} level: ${level}`
          );
        }}
      />
    </div>
  );
}
export default addButton;
