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
          <div></div>
          <div className={styles.product_name}>{product.name}</div>
          <div className={styles.product_date}>
            <Button
              text={"Delete"}
              action={() => {
                deleteProduct(product.id);
                messageHandler(`Product " ${product.name} " deleted!`);
              }}
              link={`/shelfs/${active.shelf}`}
            />
          </div>
          <div className={styles.product_timespan}>id: {product.id}</div>
          <div className={styles.product_receiver}>
            barcode: {product.barcode}
          </div>
          <div className={styles.product_average}></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.product}>
        <div className={styles.product_data}>
          <div></div>
          <div className={styles.product_name}>{product.name}</div>
          <div className={styles.product_date}>
            <Button
              text={"Take"}
              action={() => {
                takeProduct(product.id);
              }}
              link={`/shelfs/${active.shelf}`}
            />
          </div>
          <div className={styles.product_timespan}>id: {product.id}</div>
          <div className={styles.product_receiver}>
            barcode: {product.barcode}
          </div>
          <div className={styles.product_average}></div>
        </div>
      </div>
    );
  }
}

export default Product;
