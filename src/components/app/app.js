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
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 0,
        slot: 1,
        products: [{ id: 65464, name: "jalka" }],
      },
    ],
  };
  var hylly2 = {
    id: 2,
    slots: [
      {
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 0,
        slot: 1,
        products: [
          {
            id: 87659,
            name: "kissa",
          },
          {
            id: 34523,
            name: "kivi",
          },
          {
            id: 87657,
            name: "koira",
          },
        ],
      },
      {
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 3,
        slot: 2,
        products: [
          {
            id: 23464,
            name: "rotta",
          },
          {
            id: 34523,
            name: "kivi",
          },
          {
            id: 18765,
            name: "kallio",
          },
        ],
      },
    ],
  };
  var hylly3 = {
    id: 3,
    slots: [
      {
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 0,
        slot: 1,
        products: [
          {
            id: 72341,
            name: "pena",
          },
          {
            id: 37654,
            name: "timo",
          },
          {
            id: 49823,
            name: "ville",
          },
        ],
      },
      {
        level: 1,
        slot: 2,
        barcode: Math.ceil(Math.random() * 9999999999),
        products: [
          {
            id: 26457,
            name: "kitta",
          },
          {
            id: 72345,
            name: "jyri",
          },
          {
            id: 29864,
            name: "jasu",
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
    setMessage(`Shelf ${shelfNumber} deleted permanetly.`);
  };
  const deleteSlot = () => {};

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
          path="/add"
          render={() => (
            <Content>
              <AddPage
                shelfs={shelfs}
                setShelfs={setShelfs}
                active={active}
                setProduct={setProduct}
                setActive={setActive}
                messageHandler={messageHandler}
              />
              <Notification message={message} setMessage={setMessage} />
            </Content>
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <Content>
              <Search shelfs={shelfs} filter={filter} setFilter={setFilter} />
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
          path={`/shelfs/${active.shelf + 1}`}
          exact
          render={() => (
            <Content>
              <Slots
                shelf={shelfs[active.shelf]}
                active={active}
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
