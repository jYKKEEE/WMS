import Slot from "../../slot/slot";

import styles from "./slots.module.scss";
import React from "react";
import { Link } from "react-router-dom";

function Slots(props) {
  //HUOM shelf = tällähetkellä aktiivinen hylly eli (shelf[active.shelf])
  const {
    shelf,
    active,
    setActive,
    product,
    setProduct,
    messageHandler,
    deleteSlot,
  } = props;

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

  console.log(`shelf id: ${shelf.id}`);
  const slots = shelf.slots.map((slot, index) => (
    <Slot
      key={index}
      active={active}
      deleteSlot={deleteSlot}
      product={product}
      level={slot.level}
      slot={slot.slot}
      shelf={shelf}
      messageHandler={messageHandler}
      setActive={setActive}
      barcode={slot.barcode}
      products={slot.products.map((product, index) => (
        <>
          <Link
            style={{ textDecoration: "none", textDecorationColor: "blue" }}
            key={product.id}
            to={`/${product.id}`}
            onClick={() => {
              productHandler(product.id, product.name, slot.level, slot.slot);
              productIdHandler(product.id);
              barcodeHandler(slot.barcode);
            }}
          >
            <div key={index} className={styles.productslist}>
              {product.name}
            </div>
          </Link>
        </>
      ))}
    />
  ));

  if (active.add) {
    return (
      <div>
        <div className={styles.products_header}> Shelf {shelf.id}</div>

        {slots}
      </div>
    );
  }
  return (
    <div>
      <div className={styles.products_header}> Shelf {shelf.id}</div>
      {slots}
    </div>
  );
}
export default Slots;
