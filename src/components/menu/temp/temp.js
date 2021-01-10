import Button from "../../button/button";

import styles from "./temp.module.scss";

function Temp({ temp }) {
  const output = temp.map((item) => (
    <div>
      <ul>{item.name}</ul>
    </div>
  ));

  if (temp.length === 0) {
    return <></>;
  } else if (temp.length < 3) {
    return (
      <div className={styles.area}>
        Products in hold: {output}
        <div className={styles.view}>
          <Button text={"view"} link={""} action={() => {}} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.area}>
        Products in hold:<ul>{temp.length}</ul>
        <div className={styles.view}>
          <Button text={"view"} link={""} action={() => {}} />
        </div>
      </div>
    );
  }
}

export default Temp;
