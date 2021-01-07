import styles from "./cancel.module.scss";
import Button from "../../button";

function Cancel({ active, setActive }) {
  const cancel = () => {
    setActive((prevState) => ({
      ...prevState,
      deleteProduct: false,
      deleteSlot: false,
      deleteShelf: false,
      edit: false,
      add: false,
      addSlot: false,
    }));
  };

  if (
    active.deleteProduct ||
    active.deleteSlot ||
    active.deleteShelf ||
    active.edit ||
    active.add ||
    active.addSlot
  ) {
    return (
      <div className={styles.cancel}>
        <Button
          text={"Cancel"}
          link={"/add"}
          action={() => {
            cancel();
          }}
        />
      </div>
    );
  } else {
    return <></>;
  }
}
export default Cancel;
