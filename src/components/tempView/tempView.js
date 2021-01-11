import Product from "../product/product";
import styles from "./tempView.module.scss";

function TempView(props) {
  const {
    temp,
    active,
    setActive,
    setProduct,
    messageHandler,
    deleteTempProduct,
  } = props;

  const output = temp.map((product, index) => (
    // product, active, deleteProduct, takeProduct, messageHandler

    <Product
      key={index}
      product={product}
      active={active}
      setActive={setActive}
      setProduct={setProduct}
      deleteProduct={() => {
        deleteTempProduct(product.id);
      }}
      messageHandler={messageHandler}
    />
  ));

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Temporary hold View</h1>
      <div>{output}</div>
    </div>
  );
}

export default TempView;
