import styles from "./slot.module.scss";

import AddProductButton from "../addProductButton";
import { Link } from "react-router-dom";
import Button from "../../button/button";

function Slot(props) {
  const {
    level,
    slot,
    active,
    products,
    barcode,
    product,
    setActive,
    messageHandler,
    deleteSlot,
    shelf,
    deleteTempProduct,
  } = props;

  const addProductToSlot = () => {
    shelf.slots.map((mapSlot) => {
      if (mapSlot.level === level && mapSlot.slot === slot) {
        mapSlot.products.push({ id: product.id, name: product.name });
      }
      return null;
    });
  };

  const numberOfProoductsHeader = () => {
    if (products.length === 0) {
      return (
        <div className={styles.addProducts}>
          <Link
            style={{ textDecoration: "", color: "#000000" }}
            to={"/addform"}
          >
            Products:
          </Link>
        </div>
      );
    } else if (products.length === 1) {
      return "Product:";
    } else {
      return `${products.length} products:`;
    }
  }; /*<-- slotin toinen(oikea yläkulma) headeri. 
  Näyttää slotissa olevien tuotteiden määrän ehdoin.*/

  const productAddingOutput = (
    <div className={styles.product}>
      <div className={styles.product_data}>
        <div
          className={styles.product_slot_and_level}
        >{` slot:${slot}, level: ${level}`}</div>
        <div className={styles.product_amount}>{numberOfProoductsHeader()}</div>
        <div className={styles.product_barcode}>
          <div
            onClick={() => {
              console.log(`EAN:`);
            }}
          >
            EAN:{barcode}
          </div>
        </div>
        <div className={styles.product_products}>{products}</div>
        <div className={styles.product_receiver}>
          {/*Add to this slot-nappi, ilmestyy kun add state on true -->components\slot\addProductButton*/}
          <AddProductButton
            active={active}
            barcode={barcode}
            deleteTempProduct={deleteTempProduct}
            product={product}
            shelf={shelf}
            setActive={setActive}
            messageHandler={messageHandler}
            level={level}
            slot={slot}
          ></AddProductButton>
        </div>
      </div>
    </div>
  ); /*<<--Jos käyttäjä on lisäämässä tuotetta, lisätään tulosteeseen AddButton,
  jolla lisätään tuote slottiin*/

  const deleteSlotOutput = (
    <div className={styles.product}>
      <div className={styles.product_data}>
        <div
          className={styles.product_slot_and_level}
        >{` slot:${slot}, level: ${level}`}</div>

        <div className={styles.product_amount}>{numberOfProoductsHeader()}</div>
        <div className={styles.product_barcode}>EAN:{barcode}</div>
        <div className={styles.product_products}>{products}</div>
        <div className={styles.product_receiver}>
          <Button
            text={"Delete this slot"}
            link={""}
            action={() => {
              deleteSlot(slot, level);
            }}
          />
        </div>
      </div>
    </div>
  ); /*<<-- lisätään tulosteeseen Button jolla poistetaan slotti */

  if (active.add || active.temp) {
    return <div>{productAddingOutput}</div>;
  } else if (active.deleteSlot) {
    return <div>{deleteSlotOutput}</div>;
  } else {
    return (
      <div className={styles.product}>
        <div className={styles.product_data}>
          <div
            className={styles.product_slot_and_level}
          >{` slot:${slot}, level: ${level}`}</div>
          <div className={styles.product_amount}>
            {numberOfProoductsHeader()}
          </div>
          <div className={styles.product_barcode}>EAN:{barcode}</div>
          <div className={styles.product_products}>{products}</div>
          <div className={styles.product_receiver}></div>
        </div>
      </div>
    );
  }
}
export default Slot;
