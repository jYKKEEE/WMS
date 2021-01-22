import { Link } from "react-router-dom";
import styles from "./shelfs.module.scss";

import Shelf from "../../components/shelf/shelf";

function Shelfs(props) {
  const {
    active,
    deleteShelf,
    messageHandler,
    shelfs,
    shelfIsEmpty,
    setActive,
  } = props;

  const activeShelfHandler = (id) => {
    setActive((prevState) => ({
      ...prevState,
      shelf: id - 1,
    }));
  };

  const output = shelfs.map((shelf, index) => {
    if (active.deleteShelf === true) {
      if (shelfIsEmpty(index)) {
        return (
          <Link
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

  return <div className={styles.output}>{output}</div>;
}

export default Shelfs;
