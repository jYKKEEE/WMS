import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./app.module.scss";
import Header from "../header";
import Content from "../content";
import Search from "../search";
import Shelfs from "../shelfs";
import Menu from "../menu";
import Slots from "../slots";
import Product from "../product/product";
import AddPage from "../addPage/addPage";
import AddForm from "../product/add/addForm";
import Notification from "../notification";
import AddSlotButton from "../slot/addSlotButton";
import Cancel from "../addPage/cancelAdding";

function App() {
  var hylly1 = {
    id: 1,
    slots: [
      {
        barcode: 8512758022,
        level: 0,
        slot: 1,
        products: [
          { id: 65464, name: "jalka", barcode: 8512758022, level: 0, slot: 1 },
        ],
      },
    ],
  };
  var hylly2 = {
    id: 2,
    slots: [
      {
        barcode: 1630990742,
        level: 0,
        slot: 1,
        products: [
          {
            id: 87659,
            name: "kissa",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
          {
            id: 34523,
            name: "kivi",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
          {
            id: 87657,
            name: "koira",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
        ],
      },
      {
        barcode: 3377625525,
        level: 3,
        slot: 2,
        products: [
          {
            id: 23464,
            name: "rotta",
            barcode: 3377625525,
            level: 3,
            slot: 2,
          },
          {
            id: 34523,
            name: "kivi",
            barcode: 3377625525,
            level: 3,
            slot: 2,
          },
          {
            id: 18765,
            name: "kallio",
            barcode: 3377625525,
            level: 3,
            slot: 2,
          },
        ],
      },
    ],
  };
  var hylly3 = {
    id: 3,
    slots: [
      {
        barcode: 9723898802,
        level: 0,
        slot: 1,
        products: [
          {
            id: 72341,
            name: "pena",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
          {
            id: 37654,
            name: "timo",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
          {
            id: 49823,
            name: "ville",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
        ],
      },
      {
        level: 1,
        slot: 2,
        barcode: 9800815975,
        products: [
          {
            id: 26457,
            name: "kitta",
            level: 1,
            slot: 2,
            barcode: 9800815975,
          },
          {
            id: 72345,
            name: "jyri",
            level: 1,
            slot: 2,
            barcode: 9800815975,
          },
          {
            id: 29864,
            name: "jasu",
            level: 1,
            slot: 2,
            barcode: 9800815975,
          },
        ],
      },
    ],
  };
  /*var varasto = [];
 localStorage.setItem("hyllyt", JSON.stringify(varasto));

  let hyllyt = localStorage.getItem("hyllyt");

  hyllyt = hyllyt ? JSON.parse(hyllyt) : [];
  // localStorage.setItem("hyllyt", JSON.stringify([]));*/

  const [shelfs, setShelfs] = useState([hylly1, hylly2, hylly3]);
  const [active, setActive] = useState({
    shelf: 0,
    productId: 0,
    barcode: 0,
    deleteProduct: false,
    deleteSlot: false,
    deleteShelf: false,
    edit: false,
    add: false,
    addSlot: false,
  });
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    level: 0,
    slot: 0,
  });

  const productsToList = () => {
    var array = [];
    shelfs.map((shelf) => {
      shelf.slots.map((slot) => {
        slot.products.map((product) => array.push(product));
      });
    });
    console.log(`${array.length}`);
    return array;
  };

  const addSlot = (slot) => {
    setShelfs(
      (prevState) => [...prevState],
      shelfs[active.shelf].slots.push(slot)
    );
  };
  const deleteShelf = (index) => {
    const shelfNumber = shelfs[index].id;
    var newShelfs = shelfs;
    newShelfs.splice(index, 1);
    setShelfs(newShelfs);
    setActive((prevState) => ({ ...prevState, deleteShelf: false }));
    messageHandler(`Shelf ${shelfNumber} deleted permanetly.`);
  };
  const deleteSlot = (slot, level) => {
    var index = shelfs[active.shelf].slots.map((mapSlot, index) => {
      if (mapSlot.slot === slot && mapSlot.level === level) {
        return index;
      }
    });
    setShelfs(
      (prevState) => [...prevState],
      shelfs[active.shelf].slots.splice(index, 1)
    );
    setActive((prevState) => ({ ...prevState, deleteSlot: false }));
    messageHandler(`slot ${slot}, level:${level} deleted permanetly.`);
  };

  const deleteProduct = () => {
    var taulu = shelfs[active.shelf];
    taulu.slots.map((slot, index) => {
      if (active.id === slot.id) {
        slot.products.splice(index, 1);
        //slot.splice(indeksi, montaPoistetaan);
        console.log(`poisto?`);
      }

      return null;
    });
    setActive((prevState) => ({ ...prevState, deleteProduct: false }));
    setShelfs((prevState) => [...prevState], (shelfs[active.shelf] = taulu));
  };

  const messageHandler = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3500);
  };

  console.log(`product add: ${active.add}`);
  console.log(`product addSlot: ${active.addSlot}`);
  console.log(`product edit: ${active.edit}`);
  console.log(`active deleteProduct: ${active.deleteProduct}`);
  console.log(`active deleteslot: ${active.deleteSlot}`);
  console.log(`active deleteshelf: ${active.deleteShelf}`);
  console.log(`active Product: ${product.name} ja ${product.id}`);
  console.log(`active Shelf: ${active.shelf}`);
  console.log(`active barcode: ${active.barcode}`);
  console.log(`active slot: ${product.slot}`);
  console.log(`active level: ${product.level}`);
  console.log(`filter: ${filter}`);
  console.log(`message: ${message}`);

  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <Content>
              <Search
                productsToList={productsToList}
                shelfs={shelfs}
                filter={filter}
                setFilter={setFilter}
              />
            </Content>
          )}
        />
        <Route
          path="/add"
          render={() => (
            <Content>
              <Notification message={message} />
              <AddPage
                shelfs={shelfs}
                setShelfs={setShelfs}
                active={active}
                setProduct={setProduct}
                setActive={setActive}
                messageHandler={messageHandler}
              />
            </Content>
          )}
        />
        <Route
          path="/shelfs"
          exact
          render={() => (
            <Content>
              <Shelfs
                shelfs={shelfs}
                active={active}
                setActive={setActive}
                messageHandler={messageHandler}
                deleteShelf={deleteShelf}
              />
              <Cancel active={active} setActive={setActive} />
            </Content>
          )}
        />
        <Route
          path={`/shelfs/${active.shelf}`}
          exact
          render={() => (
            <Content>
              <Slots
                shelf={shelfs[active.shelf]}
                active={active}
                deleteSlot={deleteSlot}
                addSlot={addSlot}
                setActive={setActive}
                product={product}
                setProduct={setProduct}
                setShelfs={setShelfs}
                deleteProduct={deleteProduct}
                messageHandler={messageHandler}
              />
              <AddSlotButton shelf={shelfs[active.shelf]} addSlot={addSlot} />
              <Cancel active={active} setActive={setActive} />
              <Notification message={message} />
            </Content>
          )}
        />
        <Route
          path={`/${active.barcode}/${active.productId}`}
          render={() => (
            <Content>
              <Product
                deleteProduct={deleteProduct}
                product={product}
                messageHandler={messageHandler}
              />
              <Cancel active={active} setActive={setActive} />
            </Content>
          )}
        />
        <Route
          path={"/addform"}
          exact
          render={() => (
            <Content>
              <AddForm
                messageHandler={messageHandler}
                setActive={setActive}
                setProduct={setProduct}
              />
              <Cancel active={active} setActive={setActive} />
            </Content>
          )}
        />
        <Menu />
      </div>
    </Router>
  );
}
export default App;
