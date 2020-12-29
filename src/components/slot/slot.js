import styles from "./slot.module.scss";

function Slot(props) {
  const { level, slot, products, barcode } = props;

  return (
    <div className={styles.product}>
      <div className={styles.product_data}>
        <div
          className={styles.product_type}
        >{`level: ${level}, slot:${slot}`}</div>

        <div className={styles.product_amount}>Products:</div>
        <div className={styles.product_date}>{barcode}</div>
        <div className={styles.product_timespan}>{products}</div>
        <div className={styles.product_receiver}></div>
        <div className={styles.product_average}></div>
      </div>
    </div>
  );
}
export default Slot;
