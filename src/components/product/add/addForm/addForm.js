import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./addForm.module.scss";

function AddForm(props) {
  const { setProduct, setActive } = props;

  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const addingHandler = () => {
    //GenerateID()
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
  }; //<<-- return true jos tuote syötetty oikein eli id numero ja tuotteella nimi
  const output = (
    <div>
      <div className={styles.inputs}>
        <div className={styles.form}>
          <input
            value={id}
            onChange={handleId}
            type="text"
            name="shellNum"
            autoComplete="off"
            required
          />
          <label htmlFor="shellNum" className={styles.label_shell}>
            <span className={styles.content_shell}>Product id</span>
          </label>
        </div>
        <div className={styles.form}>
          <input
            value={name}
            onChange={handleName}
            type="text"
            name="shellName"
            autoComplete="off"
            required
          />
          <label htmlFor="shellName" className={styles.label_name}>
            <span className={styles.content_name}>Product name</span>
          </label>
        </div>
        <div>
          <Link to="/shelfs">
            <button
              disabled={name === "" || isNaN(parseInt(id))}
              type="submit"
              className={styles.addbutton}
              onClick={() => {
                addingHandler();
              }}
            >
              next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  return <div>{output}</div>;
}

export default AddForm;
