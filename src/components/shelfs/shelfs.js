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
  const { shelfs, activeShelfHandler } = props;

  const output = shelfs.map((shelf, index) => (
    <Link
      key={shelf.id}
      to="/products"
      onClick={() => {
        activeShelfHandler(index);
      }}
    >
      <Content>
        <Shelf shelfNum={shelf.id} slots={shelf.slots} />
      </Content>
    </Link>
  ));
  return <div>{output}</div>;
}
export default Shelfs;
