import styles from "./content.module.scss";

function Content(props) {
  return <div className={styles.content}>{props.children}</div>;
}

function TempMenuContent(props) {
  return <div className={styles.tempMenuContent}>{props.children}</div>;
}
export { Content as default, Content, TempMenuContent };
