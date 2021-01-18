import styles from "./content.module.scss";

function Content(props) {
  return (
    <div className={styles.content}>
      <div className={styles.tag}>Jyri Linna-alho®</div>
      {props.children}
    </div>
  );
}

function TempMenuContent(props) {
  return <div className={styles.tempMenuContent}>{props.children}</div>;
}
export { Content as default, Content, TempMenuContent };
