import styles from "./product.module.scss";
import { Link } from "react-router-dom";

function Product(props) {
  const { product, active, deleteProduct, messageHandler } = props;
  /*slots: [{barcode: Math.ceil(Math.random() * 9999999999),
            level: 0,        
            slot: 1,        
            products: [{id: 65464,name: "Autonrengas",barcode: 8512758022,level: 0,slot: 1,}],},*/

  console.log(`product: ${product.name}`);

  return (
    <div className={styles.product}>
      <div className={styles.product_data}>
        <div className={styles.product_type}>nimi : {product.name}</div>
        <div className={styles.product_amount}>
          <Link to={`/shelfs/${active.shelf}`}>
            <button
              onClick={() => {
                deleteProduct(product.id);
                messageHandler(`Product " ${product.name} " deleted!`);
              }}
            >
              delete
            </button>
          </Link>
        </div>
        <div className={styles.product_date}> id : {product.id}</div>
        <div className={styles.product_timespan}></div>
        <div className={styles.product_receiver}></div>
        <div className={styles.product_average}> </div>
      </div>
    </div>
  );
}

export default Product;
