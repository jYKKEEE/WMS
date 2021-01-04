import styles from "./slot.module.scss";
import AddButton from "../../product/add/addButton";

function Slot(props) {
  const {
    level,
    slot,
    products,
    barcode,
    product,
    setProduct,
    messageHandler,
    shelf,
  } = props;

  const addingOutput = (
    <div className={styles.product}>
      <div className={styles.product_data}>
        <div
          className={styles.product_type}
        >{` slot:${slot}, level: ${level}`}</div>

        <div className={styles.product_amount}>Products:</div>
        <div className={styles.product_date}>{barcode}</div>
        <div className={styles.product_timespan}>{products}</div>
        <div className={styles.product_receiver}>
          <AddButton
            product={product}
            shelf={shelf}
            setProduct={setProduct}
            messageHandler={messageHandler}
            level={level}
            slot={slot}
          ></AddButton>
          {/*Add to this slot -nappi */}
        </div>
        <div className={styles.product_average}></div>
      </div>
    </div>
  );

  if (product.add) {
    return <div>{addingOutput}</div>;
  } else {
    return (
      <div className={styles.product}>
        <div className={styles.product_data}>
          <div
            className={styles.product_type}
          >{` slot:${slot}, level: ${level}`}</div>
          <div className={styles.product_amount}>Products:</div>
          <div className={styles.product_date}>{barcode}</div>
          <div className={styles.product_timespan}>{products}</div>
          <div className={styles.product_receiver}></div>
          <div className={styles.product_average}></div>
        </div>
      </div>
    );
  }
}
export default Slot;
