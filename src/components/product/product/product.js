import styles from "./product.module.scss";
import Button from "../../button/button";

// tuotteen näkymä
function Product(props) {
  const { product, active, deleteProduct, takeProduct, messageHandler } = props;
  /*slots: [{barcode: Math.ceil(Math.random() * 9999999999),
            level: 0,        
            slot: 1,        
            products: [{id: 65464,name: "Autonrengas",barcode: 8512758022,level: 0,slot: 1,}],},*/

  console.log(`product: ${product.name}`);
  if (active.deleteProduct) {
    return (
      <div className={styles.product}>
        <div className={styles.product_data}>
          asd
          <div className={styles.product_name}>
            <Button
              text={"Delete"}
              action={() => {
                deleteProduct(product.id);
                messageHandler(`Product " ${product.name} " deleted!`);
              }}
              link={`/shelfs/${active.shelf}`}
            />
          </div>
          <div className={styles.product_amount}>Productname:</div>
          <div className={styles.product_date}> id: {product.id}</div>
          <div className={styles.product_timespan}>{product.name}</div>
          <div className={styles.product_receiver}></div>
          <div className={styles.product_average}> </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.product}>
        <div className={styles.product_data}>
          <div className={styles.product_name}>
            <Button
              text={"Take"}
              action={() => {
                takeProduct(product.id);
              }}
              link={`/shelfs/${active.shelf}`}
            />{" "}
          </div>
          <div className={styles.product_name}>{product.name}</div>
          <div className={styles.product_date}>barcode: {product.barcode}</div>
          <div className={styles.product_timespan}>id: {product.id}</div>
          <div className={styles.product_receiver}></div>
          <div className={styles.product_average}></div>
        </div>
      </div>
    );
  }
}

export default Product;
