import { Link, useParams } from "react-router-dom";
import styles from "./slots.module.scss";

import Slot from "../../../components/slot/slot";

function Slots(props) {
  //HUOM shelf = tällähetkellä aktiivinen hylly eli (shelf[active.shelf])
  const {
    active,
    deleteSlot,
    deleteTempProduct,
    messageHandler,
    product,
    shelfs,
    setActive,
    setProduct,
  } = props;

  let { id } = useParams();
  if (parseInt(id) < 1 || isNaN(id) || id > shelfs.length) {
    id = 1;
  }

  //funktiot joilla muutetaan tiloja
  const productIdHandler = (id) => {
    setActive((prevState) => ({
      ...prevState,
      productId: id,
    }));
  };
  const barcodeHandler = (barcode) => {
    setActive((prevState) => ({
      ...prevState,
      shelf: id - 1,
      barcode: barcode,
    }));
  };
  const productHandler = (id, name, level, slot, barcode) => {
    setProduct((prevState) => ({
      ...prevState,
      id: id,
      name: name,
      level: level,
      slot: slot,
      barcode: barcode,
    }));
  };

  const slots = shelfs[parseInt(id) - 1].slots.map((slot, index) => (
    <Slot
      key={index}
      active={active}
      barcode={slot.barcode}
      deleteSlot={deleteSlot}
      deleteTempProduct={deleteTempProduct}
      level={slot.level}
      messageHandler={messageHandler}
      product={product}
      shelf={shelfs[parseInt(id) - 1]}
      slot={slot.slot}
      setActive={setActive}
      products={slot.products.map((product, index) => {
        /*Jos temp tila on TRUE  poistetaan tuotteiden linkitys*/
        if (active.temp) {
          return (
            <div key={index} className={styles.productslist}>
              {product.name}
            </div>
          );
        } else {
          return (
            <Link
              key={product.id}
              style={{ textDecoration: "", color: "#223" }}
              to={`/product/${product.id}`}
              onClick={() => {
                productHandler(
                  product.id,
                  product.name,
                  slot.level,
                  slot.slot,
                  slot.barcode
                );
                productIdHandler(product.id);
                barcodeHandler(slot.barcode);
              }}
            >
              <div className={styles.products}>{product.name}</div>
            </Link>
          );
        }
      })}
    />
  ));

  if (active.add) {
    return (
      <div>
        <div className={styles.products_header}> Shelf {parseInt(id)}</div>
        {slots}
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.products_header}> Shelf {parseInt(id)}</div>
        {slots}
      </div>
    );
  }
}
export default Slots;
