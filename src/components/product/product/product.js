import styles from "./product.module.scss";
import Button from "../../button/button";
import { useParams } from "react-router-dom";

// tuotteen näkymä
function Product(props) {
  const {
    product,
    active,
    deleteProduct,
    takeProduct,
    messageHandler,
    setActive,
    setProduct,
    handleStatesByProductId,
  } = props;

  let { id } = useParams();

  if (!isNaN(parseInt(id))) {
    handleStatesByProductId(id);
    console.log(`states changed on comp: product`);
  }
  /*slots: [{barcode: Math.ceil(Math.random() * 9999999999),
            level: 0,        
            slot: 1,        
            products: [{id: 65464,name: "Autonrengas",barcode: 8512758022,level: 0,slot: 1,}],},*/
  if (product.id === 0 && product.barcode === 0) {
    return (
      <div className={styles.badState}>
        <Button text={`Back`} link={"/"} action={() => {}} />
      </div>
    );
  }
  if (active.temp) {
    return (
      <div className={styles.product}>
        <div className={styles.product_data}>
          Remove from warehouse
          <Button
            text={"Remove"}
            action={() => {
              deleteProduct(product.id);
              messageHandler(`Product " ${product.name} " deleted!`);
            }}
            link={`/tempview`}
          />
          Put Back to shelf
          <Button
            text={"Return"}
            action={() => {
              setActive((prevState) => ({
                ...prevState,
                add: true,
                temp: true,
              }));
              setProduct({
                id: product.id,
                name: product.name,
                level: product.level,
                slot: product.slot,
                barcode: product.barcode,
              });
              messageHandler(`Select shelf for '${product.name}'`);
            }}
            link={`/shelfs`}
          />
          <div></div>
          <div className={styles.product_name}></div>
          <div className={styles.product_date}></div>
          <div className={styles.product_timespan}>
            <ul>{product.name}</ul>
            <ul>id: {product.id}</ul>
            <ul>EAN: {product.barcode}</ul>
          </div>
          <div className={styles.product_receiver}></div>
          <div className={styles.product_average}></div>
        </div>
      </div>
    );
  } else if (active.deleteProduct) {
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
