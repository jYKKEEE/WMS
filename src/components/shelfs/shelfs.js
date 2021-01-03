import styles from "./shelfs.module.scss";
import Content from "../content";
import Shelf from "../shelf";
import { Link } from "react-router-dom";

function Shelfs(props) {
  const { shelfs, setActive, product, setProduct } = props;

  const activeShelfHandler = (id) => {
    setActive((prevState) => ({
      ...prevState,
      shelf: id,
    }));
  };

  const output = shelfs.map((shelf, index) => (
    <Link
      key={shelf.id}
      to={`shelfs/${shelf.id}`}
      onClick={() => {
        activeShelfHandler(index);
      }}
    >
      <Content>
        <Shelf shelfNum={shelf.id} slots={shelf.slots} />
      </Content>
    </Link>
  ));

  if (product.add) {
    return (
      <div>
        {output}
        <div>
          <p>Select shelf to add a product</p>

          <Cancel setProduct={setProduct} />
        </div>
      </div>
    );
  } else if (product.addSlot) {
    return (
      <div>
        {output}
        <div>
          <p>Select shelf to add a new slot</p>
          <Cancel setProduct={setProduct} />
        </div>
      </div>
    );
  } else {
    return <div>{output}</div>;
  }
}
export function Cancel({ setProduct }) {
  const cancelAdding = () => {
    setProduct((prevState) => ({
      ...prevState,
      add: false,
      addSlot: false,
    }));
  };
  return (
    <div>
      <Link to="add">
        <button
          onClick={() => {
            cancelAdding();
          }}
        >
          Cancel adding
        </button>
      </Link>
    </div>
  );
}

export default Shelfs;
