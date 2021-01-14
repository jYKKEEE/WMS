import Button from "../../button/button";

import styles from "./tempMenu.module.scss";

function TempMenu({ temp, setActive }) {
  const output = temp.map((item, index) => (
    <div key={index}>
      <ul>{item.name}</ul>
    </div>
  ));

  if (temp.length === 0) {
    return <></>;
  } else if (temp.length < 3) {
    return (
      <div className={styles.area}>
        Products in hold:<div className={styles.dot}> {output}</div>
        <div className={styles.view}>
          <Button
            text={"view"}
            link={"/tempview"}
            action={() => {
              setActive((prevState) => ({
                ...prevState,
                temp: true,
              }));
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.area}>
        Products in hold:
        <div className={styles.dot}>{temp.length}</div>
        <div className={styles.view}>
          <Button
            text={"view"}
            link={"/tempview"}
            action={() => {
              setActive((prevState) => ({ ...prevState, temp: true }));
            }}
          />
        </div>
      </div>
    );
  }
}

export default TempMenu;
