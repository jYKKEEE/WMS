import React from 'react';
import styles from './tempview.module.scss';
import Product from '../product/product';

function TempView(props) {
  const {
    active,
    deleteTempProduct,
    messageHandler,
    returnShelfNum,
    setActive,
    setProduct,
    temp,
  } = props;

  const output = temp.map((product, index) => (
    // product, active, deleteProduct, takeProduct, messageHandler

    <Product
      key={index}
      active={active}
      deleteProduct={() => {
        deleteTempProduct(product.id);
      }}
      messageHandler={messageHandler}
      returnShelfNum={returnShelfNum}
      product={product}
      setActive={setActive}
      setProduct={setProduct}
    />
  ));

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Temporary hold view</h1>
      <div>{output}</div>
    </div>
  );
}

export default TempView;
