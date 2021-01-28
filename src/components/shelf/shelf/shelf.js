import React from 'react';
import styles from './shelf.module.scss';

//hyllyn sisältö "url/shelfs"
function Shelf(props) {
  const { shelfNum, slots } = props;

  return (
    <div className={styles.shelf}>
      <div className={styles.shelf_data}>
        <div className={styles.shelf_type}>Shelf {shelfNum}</div>
        <div className={styles.shelf_slotsHeader}>Slots in shelf:</div>
        <div></div>
        <div className={styles.shelf_slotsCount}>
          {slots.length === 0 ? 'Empty' : slots.length}
        </div>
      </div>
    </div>
  );
}
export default Shelf;
