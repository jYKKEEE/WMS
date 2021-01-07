import styles from "./delete.module.scss";
import Button from "../../button";

function Delete({ setActive }) {
  return (
    <div className={styles.buttons}>
      <Button
        text={"Shelfs"}
        link={"/shelfs"}
        action={() => {
          setActive((prevState) => ({
            ...prevState,
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
          }));
        }}
      />
    </div>
  );
}
export default Delete;
