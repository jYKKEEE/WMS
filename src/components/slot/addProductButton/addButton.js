import styles from "./addButton.module.scss";
import Button from "../../button/button";

function addButton(props) {
  const { product, setActive, shelf, level, slot, messageHandler } = props;

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
