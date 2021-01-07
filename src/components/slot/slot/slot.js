import styles from "./slot.module.scss";
import AddButton from "../../product/add/addButton";
import Button from "../../button";

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
            setActive={setActive}
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
  const deleteOutput = (
    <div className={styles.product}>
      <div className={styles.product_data}>
        <div
          className={styles.product_type}
        >{` slot:${slot}, level: ${level}`}</div>

        <div className={styles.product_amount}>Products:</div>
        <div className={styles.product_date}>{barcode}</div>
        <div className={styles.product_timespan}>{products}</div>
        <div className={styles.product_receiver}>
          <Button
            text={"Delete this slot"}
            link={""}
            action={() => {
              deleteSlot(slot, level);
            }}
          />
        </div>
        <div className={styles.product_average}></div>
      </div>
    </div>
  );

  if (active.add) {
    return <div>{addingOutput}</div>;
  } else if (active.deleteSlot) {
    return <div>{deleteOutput}</div>;
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
