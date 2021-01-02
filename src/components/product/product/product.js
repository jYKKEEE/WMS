import styles from "./product.module.scss";

function Product(props) {
  const { shelf, product } = props;

  /*slots: [
      {
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 0,        
        slot: 1,        
        products: [{ id: 64534, name: "jalka" }],},*/

  console.log(`product: ${product.name}`);

  return (
    <div className={styles.product}>
      <div className={styles.product_data}>
        <div className={styles.product_type}>nimi : {product.name}</div>
        <div className={styles.product_amount}>id : {product.id}</div>
        <div className={styles.product_date}></div>
        <div className={styles.product_timespan}></div>
        <div className={styles.product_receiver}></div>
        <div className={styles.product_average}> </div>
      </div>
    </div>
  );
}

export default Product;
