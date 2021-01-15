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
      <div>
        <div className={styles.product}>
          <div className={styles.product_data}>
            <div className={styles.product_nameTemp}>
              <h2>{product.name}</h2>
            </div>
            <div className={styles.buttons}>
              <Button
                text={"Remove"}
                action={() => {
                  deleteProduct(product.id);
                  messageHandler(`Product " ${product.name} " deleted!`);
                }}
                link={`/tempview`}
              />
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
            </div>

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
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.product}>
          <div className={styles.product_name}>
            <h1>{product.name}</h1>
          </div>
          <div className={styles.product_data}>
            <ul>id: {product.id}</ul>
            <ul
              onMouseOver={() => {
                console.log(`EAN: ${product.barcode}`);
              }}
            >
              EAN:{product.barcode}
            </ul>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            text={"Take"}
            action={() => {
              console.log(`TAKE id: ${product.id}`);
              takeProduct(product.id);
            }}
            link={`/shelfs/${active.shelf + 1}`}
          />
          <Button
            text={"Delete"}
            action={() => {
              deleteProduct(product.id);
            }}
            link={`/shelfs/${active.shelf + 1}`}
          />
        </div>
      </div>
    );
  }
}

export default Product;
