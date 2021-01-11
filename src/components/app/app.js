import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./app.module.scss";
import Header from "../header";
import Content from "../content";
import Search from "../search";
import Shelfs from "../shelfs";
import Menu from "../menu/menu";
import Slots from "../slots/slots";
import Product from "../product/product";
import AddPage from "../addPage";
import AddForm from "../product/addForm";
import Notification from "../notification";
import AddSlotButton from "../slots/addSlotButton";
import Cancel from "../button/cancelbutton";
import TempMenu from "../menu/tempMenu";
import TempView from "../tempView";

const App = () => {
  var hylly1 = {
    id: 1,
    slots: [
      {
        barcode: 8512758022,
        level: 0,
        slot: 1,
        products: [
          {
            id: 65464,
            name: "Autonrengas",
            barcode: 8512758022,
            level: 0,
            slot: 1,
          },
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
            name: "kissan hiekkaa",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
          {
            id: 34523,
            name: "kiviä",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
          {
            id: 34576,
            name: "jakoavain",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
          {
            id: 87657,
            name: "vasara",
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
            name: "nauloja",
            barcode: 3377625525,
            level: 3,
            slot: 2,
          },
          {
            id: 34523,
            name: "tietokone",
            barcode: 3377625525,
            level: 3,
            slot: 2,
          },
          {
            id: 18765,
            name: "Näyttö",
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
            name: "kirjoja",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
          {
            id: 37654,
            name: "taulu",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
          {
            id: 49823,
            name: "kahvinkeitin",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
          {
            id: 49824,
            name: "näyttötyö",
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
            name: "kitara",
            level: 1,
            slot: 2,
            barcode: 9800815975,
          },
          {
            id: 72345,
            name: "Kitaravahvistin",
            level: 1,
            slot: 2,
            barcode: 9800815975,
          },
          {
            id: 29864,
            name: "plektroja",
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
    temp: false,
  });
  const [temp, setTemp] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    level: 0,
    slot: 1,
    barcode: 0,
  });
  //GenerateID()??
  const activeHand = (id) => {
    setActive((prevState) => ({ ...prevState, productId: id }));
  };

  const takeProduct = (id) => {
    var taulu = shelfs[active.shelf];
    taulu.slots.map((mapSlot) => {
      if (mapSlot.slot === product.slot && mapSlot.level === product.level) {
        mapSlot.products.map((ware, index) => {
          if (ware.id === id) {
            setTemp(temp.concat(product));
            mapSlot.products.splice(index, 1);
            //slot.splice(indeksi, montaPoistetaan);
            setActive((prevState) => ({
              ...prevState,
              deleteProduct: false,
            }));
            setShelfs(
              (prevState) => [...prevState],
              (shelfs[active.shelf] = taulu)
            );
          }
          return null;
        });
      }
      return null;
    });
  };

  const messageHandler = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3500);
  };
  const productsToList = () => {
    var array = [];
    shelfs.map((shelf) => {
      shelf.slots.map((slot) => {
        slot.products.map((product) => array.push(product));
        return null;
      });
      return null;
    });
    console.log(`${array.length}`);
    return array;
  };

  const addSlot = (slot) => {
    shelfs[active.shelf].slots.push(slot);
    shelfs[active.shelf].slots.sort((a, b) => a.level - b.level);
    shelfs[active.shelf].slots.sort((a, b) => a.slot - b.slot);
    setShelfs((prevState) => [...prevState], shelfs[active.shelf].slots);
  };

  //DELETET
  const deleteShelf = (index) => {
    var q = prompt(`Really want to delete?`, `yes`);

    if (q !== null || q === "yes") {
      const shelfNumber = shelfs[index].id;
      var newShelfs = shelfs;
      newShelfs.splice(index, 1);
      setShelfs(newShelfs);
      setActive((prevState) => ({ ...prevState, deleteShelf: false }));
      messageHandler(`Shelf ${shelfNumber} deleted permanetly.`);
    }
  };
  const deleteSlot = (slot, level) => {
    var q = prompt(`Really want to delete?`, `yes`);

    if (q !== null || q === "yes") {
      var index = 0;
      var slots = shelfs[active.shelf].slots;
      for (let i = 0; i < shelfs[active.shelf].slots.length; i++) {
        if (slots[i].slot === slot && slots[i].level === level) {
          index = i;
        }
      }
      console.log(`poistooon!: ${index}`);
      setShelfs(
        (prevState) => [...prevState],
        shelfs[active.shelf].slots.splice(index, 1)
      );
      setActive((prevState) => ({ ...prevState, deleteSlot: false }));
      messageHandler(`slot ${slot}, level:${level} deleted permanetly.`);
    }
  };
  const deleteProduct = (id) => {
    var q = prompt(`Really want to delete?`, `yes`);

    if (q !== null || q === "yes") {
      var taulu = shelfs[active.shelf];
      taulu.slots.map((mapSlot) => {
        if (mapSlot.slot === product.slot && mapSlot.level === product.level) {
          mapSlot.products.map((ware, index) => {
            if (ware.id === id) {
              mapSlot.products.splice(index, 1);
              //slot.splice(indeksi, montaPoistetaan);
              setActive((prevState) => ({
                ...prevState,
                deleteProduct: false,
              }));
              setShelfs(
                (prevState) => [...prevState],
                (shelfs[active.shelf] = taulu)
              );
            }
            return null;
          });
        }
        return null;
      });
    }
  };
  const deleteTempProduct = (productId) => {
    var array = temp;
    array.map((product, index) => {
      if (product.id === productId) {
        array.splice(index, 1);
        //splice(indeksi, montaPoistetaan);
      }
      return null;
    });
    setTemp(array);
  };

  console.log(`product add: ${active.add}`);
  console.log(`product addSlot: ${active.addSlot}`);
  console.log(`product edit: ${active.edit}`);
  console.log(`active temp: ${active.temp}`);
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
        <Content>
          <Route
            path="/"
            exact
            render={() => (
              <Search
                productsToList={productsToList}
                activeHand={activeHand}
                shelfs={shelfs}
                filter={filter}
                setFilter={setFilter}
              />
            )}
          />

          <Route
            path="/add"
            render={() => (
              <AddPage
                shelfs={shelfs}
                setShelfs={setShelfs}
                setActive={setActive}
                messageHandler={messageHandler}
              />
            )}
          />

          <Route
            path="/shelfs"
            exact
            render={() => (
              <>
                <Shelfs
                  shelfs={shelfs}
                  active={active}
                  setActive={setActive}
                  messageHandler={messageHandler}
                  deleteShelf={deleteShelf}
                />
                <Cancel active={active} setActive={setActive} />
              </>
            )}
          />

          <Route
            path="/shelfs/:id"
            exact
            render={() => (
              <>
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
                  deleteTempProduct={deleteTempProduct}
                  messageHandler={messageHandler}
                />
                <AddSlotButton
                  shelf={shelfs[active.shelf]}
                  addSlot={addSlot}
                  messageHandler={messageHandler}
                />
                <Cancel active={active} setActive={setActive} />
              </>
            )}
          />
          <Route
            path={`/${active.productId}`}
            render={() => (
              <>
                <Product
                  deleteProduct={deleteProduct}
                  takeProduct={takeProduct}
                  active={active}
                  setActive={setActive}
                  product={product}
                  messageHandler={messageHandler}
                />
                <Cancel active={active} setActive={setActive} />
              </>
            )}
          />
          <Route
            path={"/addform"}
            exact
            render={() => (
              <AddForm
                messageHandler={messageHandler}
                setActive={setActive}
                setProduct={setProduct}
              />
            )}
          />
          <Route
            path={"/tempview"}
            exact
            render={() => (
              <TempView
                temp={temp}
                active={active}
                setActive={setActive}
                setProduct={setProduct}
                deleteTempProduct={deleteTempProduct}
                messageHandler={messageHandler}
              />
            )}
          />
        </Content>
        <Notification message={message} />
        <TempMenu temp={temp} active={active} setActive={setActive} />
        <Menu setActive={setActive} />
      </div>
    </Router>
  );
};

export default App;
