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
  /* Testit hyllypaikan lisäykselle palauttaa TRUE, 
  jos annettu hyllyslotti jo käytössä */
  const shelfSlotAddingTests = () => {
    var bool = false;
    for (let i = 0; i < shelf.slots.length; i++) {
      //Boolean testit: katsoo onko hyllyssä jo annettu hyllyslotti
      var test1 = shelf.slots[i].level === parseInt(level);
      var test2 = shelf.slots[i].slot === parseInt(slot);
      //Jos true niin hyllyssä slotti jo käytössä!!
      if (test1 && test2) {
        bool = true;
      }
      // Jos jompikumpi input kenttä tyhjänä
      if (level === "" || slot === "") {
        bool = true;
      }
      //Jos käyttäjä syöttää tekstiä
      if (isNaN(parseInt(level)) || isNaN(parseInt(slot))) {
        bool = true;
      }
    }
    return bool;
  };

  const newSlot = () => {
    if (!shelfSlotAddingTests()) {
      shelf.slots.push({
        barcode: Math.ceil(Math.random() * 9999999999),
        level: parseInt(level),
        slot: parseInt(slot),
        products: [],
      });
      shelf.slots.sort((a, b) => a.slot - b.slot);
    } else {
      alert(`Failed to add level:( ${level} ),slot: ( ${slot} ).`);
    }
  };

  return (
    <div className={styles.inputs}>
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

      <button
        className={styles.addButton}
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
