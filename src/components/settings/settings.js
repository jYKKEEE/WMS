import styles from "./settings.module.scss";

import Button from "../button/button";

function Settings(props) {
  return (
    <div className={styles.settings}>
      <div>
        {" "}
        <h2>Settings</h2>
      </div>
      <div className={styles.button}>
        <Button text={"Change theme"} />
        <Button text={"Exit WMS"} />
      </div>
    </div>
  );
}
export default Settings;
