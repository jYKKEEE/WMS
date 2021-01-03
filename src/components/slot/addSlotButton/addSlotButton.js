import { InsertDriveFileTwoTone } from "@material-ui/icons";
import { useState } from "react";
import styles from "./addSlotButton.module.scss";

const AddSlotButton = (props) => {
  const { shelf } = props;
  const [level, setLevel] = useState("");
  const [slot, setSlot] = useState("");

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };
  const handleSlotChange = (e) => {
    setSlot(e.target.value);
  };
  const shelfSlotInUse = () => {
    var bool = false;
    for (let i = 0; i < shelf.slots.length; i++) {
      var test1 = shelf.slots[i].level === parseInt(level);
      var test2 = shelf.slots[i].slot === parseInt(slot);

      if (test1 === true && test2 === true) {
        console.log(`läpi!`);
        bool = true;
        //Jos true niin slotti jo käytössä!!
      }
    }
    return bool;
  };

  const newSlot = () => {
    if (!shelfSlotInUse()) {
      shelf.slots.push({
        barcode: Math.ceil(Math.random() * 9999999999),
        level: parseInt(level),
        slot: parseInt(slot),
        products: [],
      });
    } else {
      alert(`Failed!\nShelfslot: level:${level},slot:${slot} in use. `);
    }
  };

  return (
    <div className={styles.inputs}>
      <div className={styles.form}>
        <input
          value={level}
          onChange={handleLevelChange}
          type="text"
          name="shellNum"
          autoComplete="off"
          required
        />
        <label htmlFor="shellNum" className={styles.label_shell}>
          <span className={styles.content_shell}>Level:</span>
        </label>
      </div>
      <div className={styles.form}>
        <input
          value={slot}
          onChange={handleSlotChange}
          type="text"
          name="shellName"
          autoComplete="off"
          required
        />
        <label htmlFor="shellName" className={styles.label_name}>
          <span className={styles.content_name}>Slot:</span>
        </label>
      </div>
      <button
        onClick={() => {
          newSlot();
        }}
      >
        add slot
      </button>
    </div>
  );
};
export default AddSlotButton;
