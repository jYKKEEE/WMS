import styles from "./addproductbutton.module.scss";

import Button from "../../button/button";

function AddProductButton(props) {
  const {
    active,
    barcode,
    product,
    setActive,
    shelf,
    level,
    slot,
    messageHandler,
    deleteTempProduct,
  } = props;

  const handleProductState = () => {
    setActive((prevState) => ({
      ...prevState,
      barcode: barcode,
      deleteProduct: false,
      deleteSlot: false,
      deleteShelf: false,
      edit: false,
      add: false,
      addSlot: false,
      temp: false,
    }));
  };

  const addProductToSlot = () => {
    shelf.slots.map((mapSlot) => {
      if (mapSlot.level === level && mapSlot.slot === slot) {
        mapSlot.products.push({
          id: product.id,
          name: product.name,
          barcode: barcode,
          slot: mapSlot.slot,
          level: mapSlot.level,
        });
      }
      return null;
    });
  };
  if (active.temp) {
    return (
      <div className={styles.addButton}>
        {`'${product.name}' `}

        <Button
          text={"Add here"}
          link={"/tempview"}
          action={() => {
            addProductToSlot();
            setActive((prevState) => ({
              ...prevState,
              deleteProduct: false,
              deleteSlot: false,
              deleteShelf: false,
              edit: false,
              add: false,
              addSlot: false,
              temp: true,
            }));
            deleteTempProduct(product.id);
            messageHandler(
              `Moved ${product.name} to shelf ${shelf.id}, slot: ${slot} level: ${level} from temp`
            );
          }}
        />
      </div>
    );
  } else if (active.add) {
    return (
      <div className={styles.addButton}>
        {`'${product.name}'`}
        <Button
          text={`Add here`}
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
  } else {
    return <div></div>;
  }
}
export default AddProductButton;
