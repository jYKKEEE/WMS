import styles from "./shelfs.module.scss";
import Shelf from "../shelf/shelf";
import { Link } from "react-router-dom";

function Shelfs(props) {
  const {
    shelfs,
    setActive,
    active,
    deleteShelf,
    messageHandler,
    shelfIsEmpty,
  } = props;

  const activeShelfHandler = (id) => {
    setActive((prevState) => ({
      ...prevState,
      shelf: id,
    }));
  };

  const output = shelfs.map((shelf, index) => {
    if (active.deleteShelf === true) {
      console.log(` check  empty ${index}?: ${shelfIsEmpty(index)}`);
      if (shelfIsEmpty(index)) {
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
          <div
            className={styles.emptyShelf}
            key={index}
            onClick={() => {
              messageHandler(
                `Can't delete Shelf ${shelf.id}.Move products first!.`
              );
            }}
          >
            <Shelf shelfNum={shelf.id} slots={shelf.slots} />
          </div>
        );
      }
    } else {
      return (
        <Link
          style={{ textDecoration: "none" }}
          key={shelf.id}
          to={`shelfs/${shelf.id}`}
          onClick={() => {
            activeShelfHandler(index + 1);
          }}
        >
          <Shelf shelfNum={shelf.id} slots={shelf.slots} />
        </Link>
      );
    }
  });

  return <div>{output}</div>;
}

export default Shelfs;
