import Slot from "../slot";
import styles from "./slots.module.scss";
import { Link } from "react-router-dom";

/*var shelf = {
    id: 1,
    slots: [{
        barcode: Math.random() * 9999999,
        level: 0,
        slot: 1,
        products: [{id: 1,
            name: "kissa",}],},
],
  };*/

function Slots(props) {
  const { shelf, setActiveProductId, setBarcode, setProduct } = props;

  //funktiot joilla muutetaan tiloja
  const activeProductHandler = (id) => {
    setActiveProductId(id);
  };
  const barcodeHandler = (barcode) => {
    setBarcode(barcode);
  };
  const productHandler = (product) => {
    setProduct(product);
  };

  //ota jokainen hyllypaikka omaan taulukkoonsa
  console.log(`shelf id: ${shelf.id}`);
  const slots = shelf.slots.map((slot, index) => (
    <Slot
      key={index}
      level={slot.level}
      slot={slot.slot}
      barcode={slot.barcode}
      products={slot.products.map((product, index) => (
        <Link
          key={product.id}
          to={`/${slot.barcode}/${product.id}`}
          onClick={() => {
            productHandler(product);
            activeProductHandler(product.id);
            barcodeHandler(slot.barcode);
          }}
        >
          <p key={index}>
            {product.name} ({index + 1})
          </p>
        </Link>
      ))}
    />
  ));

  return (
    <div>
      <div className={styles.products_header}> Shelf {shelf.id}</div>
      {slots}
    </div>
  );
}
export default Slots;
