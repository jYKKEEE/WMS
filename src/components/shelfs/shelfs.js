import styles from "./shelfs.module.scss";
import Content from "../content";
import Shelf from "../shelf";
import { Link } from "react-router-dom";

/*var hylly1 = {
    id: 1,
    slots: [{
        barcode: Math.random() * 9999999,
        level: 0,
        slot: 1,
        products: [new Product("kala"), new Product("kissa")],},
],
  };*/

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
          <p>Select shelf to add</p>
          <button
            onClick={() => {
              setProduct((prevState) => ({
                ...prevState,
                add: false,
              }));
            }}
          >
            cancel add
          </button>
        </div>
      </div>
    );
  } else {
    return <div>{output}</div>;
  }
}
export default Shelfs;
