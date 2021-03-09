import React from 'react';
import { Link } from 'react-router-dom';
import styles from './slot.module.scss';
import AddProductButton from '../addproductbutton';
import Button from '../../button/button';

function Slot(props) {
  const {
    active,
    barcode,
    deleteSlot,
    deleteTempProduct,
    level,
    messageHandler,
    product,
    products,
    shelf,
    slot,
    setActive,
  } = props;

  const numberOfProoductsHeader = () => {
    if (products.length === 0) {
      return (
        <div className={styles.addProducts}>
          <Link
            style={{ textDecoration: '', color: '#000000' }}
            to={'/addform'}
          >
            Products:
          </Link>
        </div>
      );
    } else if (products.length === 1) {
      return 'Product:';
    } else {
      return `${products.length} products:`;
    }
  }; /*<-- slotin toinen(oikea yläkulma) headeri.
  Näyttää slotissa olevien tuotteiden määrän ehdoin.*/

  return (
    <div className={styles.product}>
      <div className={styles.product_data}>
        <div
          className={styles.product_slot_and_level}
        >{` slot:${slot}, level: ${level}`}</div>
        <div className={styles.product_amount}>{numberOfProoductsHeader()}</div>
        <div className={styles.product_barcode}>EAN: {barcode}</div>
        <div className={styles.product_products}>
          {/*Jos käyttäjä on lisäämässä tuotetta, lisätään tulosteeseen AddButton,jolla lisätään tuote slottiin*/}
          {active.add || active.temp ? (
            <>
              {products}
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
              />
            </>
          ) : (
            <>{products}</>
          )}
        </div>
        <div className={styles.product_deleteSlotButton}>
          {/*jos tila on true, lisätään tulosteeseen Button, jolla poistetaan slotti */}
          {active.deleteSlot ? (
            <Button
              text={'Delete this slot'}
              link={''}
              action={() => {
                deleteSlot(slot, level);
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default Slot;
