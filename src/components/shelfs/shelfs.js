import styles from "./shelfs.module.scss";
import Content from "../content";
import Shelf from "../shelf/shelf";
import Cancel from "../addPage/cancelAdding";
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
          key={shelf.id}
          to={`/add`}
          onClick={() => {
            deleteShelf(index);
          }}
        >
          <Content>
            <Shelf shelfNum={shelf.id} slots={shelf.slots} />
          </Content>
        </Link>
      );
    } else {
      return (
        <Link
          key={shelf.id}
          to={`shelfs/${index}`}
          onClick={() => {
            activeShelfHandler(index);
          }}
        >
          <Content>
            <Shelf shelfNum={shelf.id} slots={shelf.slots} />
          </Content>
        </Link>
      );
    }
  });

  if (active.add) {
    return (
      <div>
        {output}
        <div>
          <p>Select shelf to add a product</p>
        </div>
      </div>
    );
  } else if (active.addSlot) {
    return (
      <div>
        {output}
        <div>
          <p>Select shelf to add a new slot</p>
        </div>
      </div>
    );
  } else {
    return <div>{output}</div>;
  }
}

export default Shelfs;
