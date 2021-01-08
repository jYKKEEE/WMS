import styles from "./addPage.module.scss";
import AddShelf from "../../shelf/addShelf";
import Button from "../../button/button";

function AddProduct(props) {
  const {
    shelfs,
    setShelfs,
    active,
    setProduct,
    messageHandler,
    setActive,
  } = props;

  return (
    <div className={styles.addPage}>
      <h1>Shelf:</h1>
      <AddShelf
        shelfs={shelfs}
        setShelfs={setShelfs}
        messageHandler={messageHandler}
      />
      <h1>Slots:</h1>
      <Button
        text={"Add Slots"}
        link={"/shelfs"}
        action={() => {
          setActive((prevState) => ({
            ...prevState,
            deleteProduct: false,
            deleteSlot: false,
            deleteShelf: false,
            edit: false,
            add: false,
            addSlot: true,
          }));
        }}
      />
      <h1>Product:</h1>
      <Button text={"Add product"} link={"/addform"} action={() => {}} />
      <h1>Delete:</h1>
      <Delete setActive={setActive} />
    </div>
  );
}

function Delete({ setActive }) {
  return (
    <div className={styles.deletebuttons}>
      <Button
        text={"Shelfs"}
        link={"/shelfs"}
        action={() => {
          setActive((prevState) => ({
            ...prevState,
            deleteProduct: false,
            deleteSlot: false,
            edit: false,
            add: false,
            addSlot: false,
            deleteShelf: true,
          }));
        }}
      />
      <Button
        text={"Slots"}
        link={"/shelfs"}
        action={() => {
          setActive((prevState) => ({
            ...prevState,
            deleteProduct: false,
            edit: false,
            add: false,
            addSlot: false,
            deleteShelf: false,
            deleteSlot: true,
          }));
        }}
      />

      <Button
        text={"Products"}
        link={"/shelfs"}
        action={() => {
          setActive((prevState) => ({
            ...prevState,
            deleteProduct: true,
            deleteSlot: false,
            edit: false,
            add: false,
            addSlot: false,
            deleteShelf: false,
          }));
        }}
      />
    </div>
  );
}
export default AddProduct;
