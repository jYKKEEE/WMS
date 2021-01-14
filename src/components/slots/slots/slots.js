import Slot from "../../slot/slot";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "./slots.module.scss";
import React from "react";
import { Link, useParams, Route } from "react-router-dom";

function Slots(props) {
  //HUOM shelf = tällähetkellä aktiivinen hylly eli (shelf[active.shelf])
  const {
    shelfs,
    active,
    setActive,
    product,
    setProduct,
    messageHandler,
    deleteSlot,
    deleteTempProduct,
  } = props;

  let { id } = useParams();

  if (parseInt(id) < 1 || isNaN(id) || id > shelfs.length) {
    id = 1;
  }

  console.log(`:id on :!:!:!${id}`);

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
      shelf: id - 1,
      barcode: barcode,
    }));
  };
  const productHandler = (id, name, level, slot, barcode) => {
    setProduct((prevState) => ({
      ...prevState,
      id: id,
      name: name,
      level: level,
      slot: slot,
      barcode: barcode,
    }));
  };

  console.log(`shelf id: `);
  const slots = shelfs[parseInt(id) - 1].slots.map((slot, index) => (
    <Slot
      key={index}
      active={active}
      deleteSlot={deleteSlot}
      product={product}
      level={slot.level}
      deleteTempProduct={deleteTempProduct}
      slot={slot.slot}
      shelf={shelfs[parseInt(id) - 1]}
      messageHandler={messageHandler}
      setActive={setActive}
      barcode={slot.barcode}
      products={slot.products.map((product, index) => {
        /*Jos temp tila on TRUE  poistetaan tuotteiden linkitys*/
        if (active.temp) {
          return (
            <div key={index} className={styles.productslist}>
              {product.name}
            </div>
          );
        } else {
          return (
            <Link
              key={product.id}
              style={{ textDecoration: "", color: "#223" }}
              to={`/${product.id}`}
              onClick={() => {
                productHandler(
                  product.id,
                  product.name,
                  slot.level,
                  slot.slot,
                  slot.barcode
                );
                productIdHandler(product.id);
                barcodeHandler(slot.barcode);
              }}
            >
              <div className={styles.products}>{product.name}</div>
            </Link>
          );
        }
      })}
    />
  ));

  if (active.add) {
    return (
      <div>
        <div className={styles.products_header}> Shelf {parseInt(id)}</div>
        {slots}
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.products_header}> Shelf {parseInt(id)}</div>
        {slots}
      </div>
    );
  }
}
export default Slots;
