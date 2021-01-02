import Slot from "../slot/slot";
import AddSlot from "../slot/addSlot";
import styles from "./slots.module.scss";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

/*var shelf = {
    id: 1,
    slots: [{
        barcode: Math.random() * 9999999,
        level: 0,
        slot: 1,
        products: [{id: 1,
            name: "kissa",}],},
],
  };*/

function Slots(props) {
  const { shelf, setActive, product, addSlot, setProduct } = props;
  let match = useRouteMatch();

  //funktiot joilla muutetaan tiloja
  const productIdHandler = (id) => {
    setActive((prevState) => ({
      ...prevState,
      productId: id,
    }));
  };
  const barcodeHandler = (barcode) => {
    setActive((prevState) => ({
      ...prevState,
      barcode: barcode,
    }));
  };
  const productHandler = (id, name, level, slot) => {
    setProduct((prevState) => ({
      ...prevState,
      id: id,
      name: name,
      level: level,
      slot: slot,
    }));
  };

  //ota jokainen hyllypaikka omaan taulukkoonsa
  console.log(`shelf id: ${shelf.id}`);
  const slots = shelf.slots.map((slot, index) => (
    <Slot
      key={index}
      product={product}
      level={slot.level}
      addSlot={addSlot}
      slot={slot.slot}
      setProduct={setProduct}
      barcode={slot.barcode}
      products={slot.products.map((product, index) => (
        <Link
          key={product.id}
          to={`/${slot.barcode}/${product.id}`}
          onClick={() => {
            productHandler(product.id, product.name, slot.level, slot.slot);
            productIdHandler(product.id);
            barcodeHandler(slot.barcode);
          }}
        >
          <p key={index}>
            {product.name} ({index + 1})
          </p>
        </Link>
      ))}
    />
  ));

  return (
    <div>
      <div className={styles.products_header}> Shelf {shelf.id}</div>

      {slots}
      <Link to={`${match.url}`}>
        <button
          onClick={() => {
            /*lisää annettuun hyllyyn slotti!!*/
            addSlot();
          }}
        >
          lisää
        </button>
      </Link>
      <AddSlot addSlot={addSlot} />
    </div>
  );
}
export default Slots;
