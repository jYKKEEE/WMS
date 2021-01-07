import styles from "./content.module.scss";
import AddSlotButton from "../slot/addSlotButton";

function Content(props) {
  return <div className={styles.content}>{props.children}</div>;
}
export default Content;
