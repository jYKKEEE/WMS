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
  const { shelfs, setActiveShelf, adding } = props;

  const activeShelfHandler = (id) => {
    setActiveShelf(id);
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

  if (adding) {
    return (
      <div>
        {output}
        <div>
          <p>Select shelf to add</p>
        </div>
      </div>
    );
  } else {
    return <div>{output}</div>;
  }
}
export default Shelfs;
