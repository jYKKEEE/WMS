import styles from "./shelf.module.scss";

function Shelf(props) {
  const { shelfNum, slots } = props;

  return (
    <div className={styles.shelf}>
      <div className={styles.shelf_data}>
        <div className={styles.shelf_type}>Shelf {shelfNum}</div>
        <div className={styles.shelf_amount}>Shelf slots:</div>
        <div className={styles.shelf_date}></div>
        <div className={styles.shelf_timespan}>{slots.length}</div>
        <div className={styles.shelf_receiver}></div>
        <div className={styles.shelf_average}> </div>
      </div>
    </div>
  );
}
export default Shelf;
