import Product from "../product";
import styles from "./products.module.scss";

/*var shelf = {
    id: 1,
    slots: [{
        barcode: Math.random() * 9999999,
        level: 0,
        slot: 1,
        products: [new Product("kala"), new Product("kissa")],},
],
  };*/

function Products({ shelf }) {
  //ota jokainen hyllypaikka omaan taulukkoonsa
  const slots = shelf.slots.map((slot) => (
    /*<div key={slot.barcode}>
      level:{slot.level}
      <br />
      slot:{slot.slot}
      <br />
      products:
      {}*/
    <div>
      <Product
        level={slot.level}
        slot={slot.slot}
        barcode={slot.barcode}
        products={slot.products.map((product) => (
          <p>{product.name}</p>
        ))}
      />
    </div>
  ));

  return (
    <div>
      <div className={styles.products_header}> Shelf {shelf.id}</div>
      {slots}
    </div>
  );
}
export default Products;
