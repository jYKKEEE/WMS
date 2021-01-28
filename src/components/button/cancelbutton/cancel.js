import React from 'react';
import styles from './cancel.module.scss';

import Button from '../button';

//Komponentin ideana on tulostaa <Button /> joka peruuttaa "lisäys tilan", jos jokin Add- tai Delete-tiloista on True.
function Cancel({ active, setActive }) {
  const cancel = () => {
    setActive((prevState) => ({
      ...prevState,
      deleteProduct: false,
      deleteSlot: false,
      deleteShelf: false,
      edit: false,
      add: false,
      addSlot: false,
      temp: false,
    }));
  }; //<-- muuttaa kaikki Delete- ja Add-tilat falseksi.

  if (
    active.deleteProduct ||
    active.deleteSlot ||
    active.deleteShelf ||
    active.edit ||
    active.add ||
    active.addSlot ||
    active.temp
  ) {
    return (
      <div className={styles.cancel}>
        <Button
          text={'Cancel'}
          link={'/'}
          action={() => {
            cancel();
          }}
        />
      </div>
    );
  } else {
    return <></>;
  }
}
export default Cancel;
