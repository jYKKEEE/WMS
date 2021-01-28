import React from 'react';
import styles from './addproductbutton.module.scss';
import { useHistory } from 'react-router-dom';
import Button from '../../button/button';

function AddProductButton(props) {
  const {
    active,
    barcode,
    product,
    setActive,
    shelf,
    level,
    slot,
    messageHandler,
    deleteTempProduct,
  } = props;

  const history = useHistory();
  const handleProductState = () => {
    setActive((prevState) => ({
      ...prevState,
      barcode: barcode,
      deleteProduct: false,
      deleteSlot: false,
      deleteShelf: false,
      edit: false,
      add: false,
      addSlot: false,
      temp: false,
    }));
  };

  const addProductToSlot = () => {
    shelf.slots.map((mapSlot) => {
      if (mapSlot.level === level && mapSlot.slot === slot) {
        mapSlot.products.push({
          id: product.id,
          name: product.name,
          barcode: barcode,
          slot: mapSlot.slot,
          level: mapSlot.level,
        });
      }
      return null;
    });
  };
  if (active.add && active.temp) {
    return (
      <div className={styles.addButton}>
        {`'${product.name}' `}
        <Button
          text={'Add here'}
          link={'/tempview'}
          action={() => {
            history.push('/');
            addProductToSlot();
            setActive((prevState) => ({
              ...prevState,
              deleteProduct: false,
              deleteSlot: false,
              deleteShelf: false,
              edit: false,
              add: false,
              addSlot: false,
              temp: true,
            }));
            deleteTempProduct(product.id);
            messageHandler(
              `Moved ${product.name} to shelf ${shelf.id}, slot: ${slot} level: ${level} from temp`
            );
          }}
        />
      </div>
    );
  } else if (active.add && !active.temp) {
    return (
      <div className={styles.addButton}>
        {`'${product.name}'`}
        <Button
          text={'Add here'}
          link={'/add'}
          action={() => {
            history.push('/');
            addProductToSlot();
            handleProductState();
            messageHandler(
              `Added ${product.name} to shelf ${shelf.id}, slot: ${slot} level: ${level}`
            );
          }}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default AddProductButton;
