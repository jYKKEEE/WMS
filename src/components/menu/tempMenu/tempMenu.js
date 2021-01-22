import styles from "./tempmenu.module.scss";

import Button from "../../button/button";

/*TempMenu: alaruudun tilapäis säilö tuotteille.
  Tempmenu näkyy JOS temp tilassa on tuotteita ja näkymä vaihtuu tuotteiden määrän mukaan.
  View buttonilla siirrytään varsinaiseen temp-näkymään*/
function TempMenu({ temp, setActive }) {
  const output = temp.map((item, index) => (
    <div key={index}>
      <ul>{item.name}</ul>
    </div>
  ));

  if (temp.length === 0) {
    return <></>;
  } else if (temp.length < 2) {
    return (
      <div className={styles.area}>
        In temp:<div className={styles.dot}> {output}</div>
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
    );
  } else {
    return (
      <div className={styles.area}>
        Products in temp:
        <div className={styles.dot}>{temp.length}</div>
        <Button
          text={"view"}
          link={"/tempview"}
          action={() => {
            setActive((prevState) => ({ ...prevState, temp: true }));
          }}
        />
      </div>
    );
  }
}

export default TempMenu;
