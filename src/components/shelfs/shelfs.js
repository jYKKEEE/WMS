import styles from "./shelfs.module.scss";
import Shelf from "../shelf/shelf";
import { Link } from "react-router-dom";

function Shelfs(props) {
  const { shelfs, setActive, active, deleteShelf } = props;

  const activeShelfHandler = (id) => {
    setActive((prevState) => ({
      ...prevState,
      shelf: id,
    }));
  };

  const output = shelfs.map((shelf, index) => {
    if (active.deleteShelf === true) {
      return (
        <Link
          style={{ textDecoration: "none" }}
          key={shelf.id}
          to={`/add`}
          onClick={() => {
            deleteShelf(index);
          }}
        >
          <Shelf shelfNum={shelf.id} slots={shelf.slots} />
        </Link>
      );
    } else {
      return (
        <Link
          style={{ textDecoration: "none" }}
          key={shelf.id}
          to={`shelfs/${index}`}
          onClick={() => {
            activeShelfHandler(index);
          }}
        >
          <Shelf shelfNum={shelf.id} slots={shelf.slots} />
        </Link>
      );
    }
  });

  if (active.add) {
    return (
      <div>
        {output}
        <div className={styles.addText}></div>
      </div>
    );
  } else if (active.addSlot) {
    return (
      <div>
        {output}
        <div className={styles.addText}></div>
      </div>
    );
  } else {
    return <div>{output}</div>;
  }
}

export default Shelfs;
