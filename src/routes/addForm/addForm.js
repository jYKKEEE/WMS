import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./addform.module.scss";

import Input from "../../components/input";

//AddFormissa määritetään uusi varastoon lisättävä tuote ja linkitetään käyttäjä eteenpäin
function AddForm(props) {
  const { messageHandler, setProduct, setActive } = props;

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  // Tilat ja niden käsittelyt
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleId = (e) => {
    setId(e.target.value);
  };

  /*addingHandler tarkistaa onko käyttäjän syöttämät arvon oikein.
  nimikenttä ei tyhjä ja id on Integer*/
  const addingHandler = () => {
    if (name !== "" && id !== "" && !isNaN(parseInt(id))) {
      setProduct((prevState) => ({
        ...prevState,
        id: parseInt(id),
        name: name,
      }));
      setActive((prevState) => ({
        ...prevState,
        add: true,
      }));
      return true;
    } else {
      setProduct((prevState) => ({
        ...prevState,
        id: 0,
        name: "",
      }));
      setActive((prevState) => ({
        ...prevState,
        add: false,
      }));
      return false;
    }
  }; //<<-- RETURN TRUE jos tuote syötetty oikein eli id numero ja tuotteella nimi

  return (
    <div className={styles.inputs}>
      <Input text={`Product id:`} value={id} onChange={handleId} />{" "}
      <Input text={`Product name:`} value={name} onChange={handleName} />
      <div className={styles.buttons}>
        <Link to="/shelfs">
          <button
            disabled={name === "" || isNaN(parseInt(id))}
            type="submit"
            className={styles.addbutton}
            onClick={() => {
              addingHandler();
              messageHandler(`Select shelf to add a product: ${name}`);
            }}
          >
            next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddForm;
