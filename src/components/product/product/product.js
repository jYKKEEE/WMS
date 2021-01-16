import { useParams } from "react-router-dom";
import styles from "./product.module.scss";

import Button from "../../button/button";

// tuotteen näkymä
function Product(props) {
  const {
    active,
    deleteProduct,
    messageHandler,
    handleStatesByProductId,
    product,
    returnShelfNum,
    setActive,
    setProduct,
    takeProduct,
  } = props;

  let { id } = useParams();

  if (!isNaN(parseInt(id))) {
    handleStatesByProductId(id);
    console.log(`states changed on comp: product`);
  }

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
                    slot: product.slot,
                    level: product.level,
                    barcode: product.barcode,
                  });
                  messageHandler(`Select shelf for '${product.name}'`);
                }}
                link={`/shelfs`}
              />
            </div>

            <div className={styles.product_date}></div>
            <div className={styles.product_timespan}>
              <ul>id: {product.id}</ul>
              <ul>
                Previous
                <button
                  onClick={() => {
                    messageHandler(
                      `${product.name} were in shelf${returnShelfNum(
                        product.barcode
                      )}: slot: ${product.slot}, level:${product.level} `
                    );
                  }}
                >
                  EAN
                </button>
                :{product.barcode}
              </ul>
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
              onClick={() => {
                console.log(`EAN: ${product.barcode}`);
              }}
            >
              EAN:{product.barcode}
            </ul>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            text={"Delete"}
            action={() => {
              deleteProduct(product.id);
            }}
            link={`/shelfs/${active.shelf + 1}`}
          />
          <Button
            text={"Take"}
            action={() => {
              console.log(`TAKE id: ${product.id}`);
              takeProduct(product.id);
            }}
            link={`/shelfs/${active.shelf + 1}`}
          />
          <Button
            text={"Locate"}
            action={() => {
              messageHandler(
                `Find ${product.name} @ Shelf${active.shelf + 1}: slot:${
                  product.slot
                },level:${product.level}.`
              );
            }}
            link={""}
          />
        </div>
      </div>
    );
  }
}

export default Product;
