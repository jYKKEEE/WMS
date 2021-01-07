import styles from "./addPage.module.scss";
import AddShelf from "../../shelf/addShelf";
import { Link } from "react-router-dom";
import Button from "../../button";
import Delete from "../delete";

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

export default AddProduct;
