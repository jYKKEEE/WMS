import { useState } from "react";
import styles from "./addSlotButton.module.scss";

import Button from "../button";
import Input from "../../input";
import Checkbox from "@material-ui/core/Checkbox";

const AddSlotButton = (props) => {
  const { addSlot, messageHandler, shelf, active } = props;

  const [level, setLevel] = useState("");
  const [slot, setSlot] = useState("");
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // inputtien valuen lukeminen
  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };
  const handleSlotChange = (e) => {
    setSlot(e.target.value);
  };

  /* Testit hyllypaikan lisäykselle palauttaa TRUE, 
  jos annettu hyllyslotti jo käytössä */
  const shelfSlotAddingTests = (slot, level) => {
    var bool = false;
    for (let i = 0; i < shelf.slots.length; i++) {
      //Boolean testit: katsoo onko hyllyssä jo annettu hyllyslotti
      var test1 = shelf.slots[i].level === parseInt(level);
      var test2 = shelf.slots[i].slot === parseInt(slot);
      //Jos true niin hyllyssä slotti jo käytössä!!
      if (test1 && test2 && checked) {
        messageHandler(
          `This shelf allready has a slot:  Slot: ( ${slot} ), Level:( ${level} ). `
        );
        return (bool = true);
      } else if (test1 && test2 && !checked) {
        return (bool = true);
      }
    }
    //Jos käyttäjä syöttää tekstiä
    if (isNaN(parseInt(level)) || isNaN(parseInt(slot))) {
      messageHandler(
        `Only letter allowed. Slot: ( ${slot} ), Level:( ${level} )."`
      );
      return (bool = true);
    }

    // Jos jompikumpi input kenttä tyhjänä tai slot numero 0
    if (slot === "") {
      messageHandler(`Please insert a number to "slot"`);
      return (bool = true);
    } else if (level === "") {
      messageHandler(`Please insert a number to "level"`);
      return (bool = true);
    } else if (parseInt(slot) < 1) {
      messageHandler(`Slot number can't be lower than 1`);
      return (bool = true);
    } else if (parseInt(level) > 25 && !checked) {
      messageHandler(`Maximum ammount of levels: 25`);
    }
    return bool;
  };

  // newSlot käyttää propseina saatua addSlot funktiota, joka lisää varastoon parametrien mukaisen hyllypaikan
  const addOneSlot = () => {
    if (!shelfSlotAddingTests(slot, level)) {
      addSlot({
        barcode: Math.ceil(Math.random() * 9999999999),
        level: parseInt(level),
        slot: parseInt(slot),
        products: [],
      });
    }
  };
  //addMultipleSlots parametriksi tasojen määrä(level) ja functio lisää uudenpaikan slotin jokaiselle tasolle(level).
  const addMultipleSlots = (level) => {
    for (let i = 0; i < level; i++) {
      if (!shelfSlotAddingTests(slot, i)) {
        addSlot({
          barcode: Math.ceil(Math.random() * 9999999999),
          level: parseInt(i),
          slot: parseInt(slot),
          products: [],
        });
      }
    }
  };

  if (active.addSlot) {
    //Jos checked on true palautetaan yhden hyllypaikan lisäysnäkymä.
    if (checked === true) {
      return (
        <div className={styles.inputs}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            size="small"
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
          <Input
            text={`Insert slot number:`}
            value={slot}
            onChange={handleSlotChange}
          />
          <Input
            text={`Insert level number:`}
            value={level}
            onChange={handleLevelChange}
          />
          <div className={styles.addButton}>
            <Button
              text={"Add slot"}
              link={""}
              action={() => {
                addOneSlot();
              }}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.inputs}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            size="small"
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
          <Input
            text={`Insert slot number:`}
            value={slot}
            onChange={handleSlotChange}
          />
          <Input
            text={`How many levels?`}
            value={level}
            onChange={handleLevelChange}
          />
          <div className={styles.addButton}>
            <Button
              text={"Add slot"}
              link={""}
              action={() => {
                addMultipleSlots(level);
              }}
            />
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
};
export default AddSlotButton;
