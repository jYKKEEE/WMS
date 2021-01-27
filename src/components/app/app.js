import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./app.module.scss";
import data from "../../testdata.js";

//Routes komponentit
import AddPage from "../../routes/addpage";
import AddForm from "../../routes/addform";
import AddSlotForm from "../../routes/slots/addslotform";
import Product from "../../routes/product";
import Shelfs from "../../routes/shelfs";
import Slots from "../../routes/slots/slots";
import TempView from "../../routes/tempview";

//Komponentit
import Cancel from "../button/cancelbutton";
import Content from "../content";
import Header from "../header";
import Menu from "../menu/menu";
import Notification from "../notification";
import Settings from "../settings";
import Search from "../../routes/search";
import TempMenu from "../menu/tempmenu";

const App = () => {
  // shelfs (data):n tilalle tyhjä taulukko jos ei haluu käyttää testi dataa
  const [shelfs, setShelfs] = useState(data);
  const [active, setActive] = useState({
    add: false,
    addSlot: false,
    barcode: 0,
    deleteProduct: false,
    deleteSlot: false,
    deleteShelf: false,
    edit: false,
    shelf: 0,
    productId: 0,
    temp: false,
  });
  const [temp, setTemp] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    barcode: 0,
    level: 0,
    slot: 1,
  });

  /*console.log(`product add: ${active.add}`);
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
  console.log(`message: ${message}`);*/

  /*returnShelfNum parametriksi tuotteen barcode niin palauttaa hyllyn numeron, jossa tuote on ollut.
  käytetään tempview komponentissa, jotta käyttäjä tietää tuotteen edellisen hylly paikan */
  const returnShelfNum = (productBarcode) => {
    var out = null;
    shelfs.map((shelf) =>
      shelf.slots.map((slot) => {
        if (slot.barcode === productBarcode) {
          out = shelf.id;
        }
        return null;
      })
    );
    return out;
  };

  // shelfIsEmpty parametriksi annetaan mäpätty shelfs indeksi
  const shelfIsEmpty = (index) => {
    var out = 0;
    shelfs[index].slots.map((slot) => (out += slot.products.length));
    return out === 0;
  }; //<-- katsoo onko hyllyssä tuotteita.

  //takeProduct ottaa hyllystä id:tä vastaavan tuotteen ja siirtää temp "hyllyyn"
  const takeProduct = (id) => {
    shelfs.map((shelf, shelfIndex) =>
      shelf.slots.map((mapSlot) =>
        mapSlot.products.map((product, productIndex) => {
          if (product.id === parseInt(id)) {
            var array = shelfs[shelfIndex];
            setTemp(temp.concat(product));
            mapSlot.products.splice(productIndex, 1);
            //slot.splice(indeksi, montaPoistetaan);
            setShelfs(
              (prevState) => [...prevState],
              (shelfs[shelfIndex] = array)
            );
          }
          return null;
        })
      )
    );
  };
  //messageHandler hallitsee Notifications-komponentin tulostetta, parametriksi merkkijono / mj muuttuja.
  const messageHandler = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3200);
  };

  //productsToList laittaa koko varaston tuotteet yhdelle listalle ...components\search
  const productsToList = () => {
    var array = [];
    shelfs.map((shelf) => {
      shelf.slots.map((slot) => {
        slot.products.map((product) => array.push(product));
        return null;
      });
      return null;
    });
    // console.log(`${array.length}`);
    return array;
  };

  // addSlot lisää uuden hyllypaikan
  const addSlot = (slot) => {
    shelfs[active.shelf].slots.push(slot);
    shelfs[active.shelf].slots.sort((a, b) => a.level - b.level);
    shelfs[active.shelf].slots.sort((a, b) => a.slot - b.slot);
    setShelfs((prevState) => [...prevState], shelfs[active.shelf].slots);
  };

  //DELETET
  const deleteShelf = (index) => {
    var q = prompt(`Really want to delete Shelf ${shelfs[index].id}?`, `yes`);

    if (q !== null || q === "yes") {
      const shelfNumber = shelfs[index].id;
      var newShelfs = shelfs;
      newShelfs.splice(index, 1);
      setShelfs(newShelfs);
      setActive((prevState) => ({ ...prevState, deleteShelf: false }));
      messageHandler(`Shelf ${shelfNumber} deleted permanetly.`);
    } else {
      setActive((prevState) => ({ ...prevState, deleteShelf: false }));
    }
  };

  //kun deleteSlot-tila true, jokainen hyllypaikka saa käyttöön tämän function. paramenteinä mäpätut slot ja level
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
      setShelfs(
        (prevState) => [...prevState],
        shelfs[active.shelf].slots.splice(index, 1)
      );
      setActive((prevState) => ({ ...prevState, deleteSlot: false }));
      messageHandler(`slot ${slot}, level:${level} deleted permanetly.`);
    }
  };
  //kun deleteProduct-tila true product komponentti saa deleteProduct funktion ja poistaa tuotteen annetulla id:llä
  const deleteProduct = (id) => {
    var q = prompt(`Really want to delete this product?`, `yes`);
    if (q !== null || q === "yes") {
      shelfs.map((shelf, shelfIndex) =>
        shelf.slots.map((mapSlot) =>
          mapSlot.products.map((product, productIndex) => {
            if (product.id === parseInt(id)) {
              var array = shelfs[shelfIndex];
              mapSlot.products.splice(productIndex, 1);
              //slot.splice(indeksi, montaPoistetaan);
              setShelfs(
                (prevState) => [...prevState],
                (shelfs[shelfIndex] = array)
              );
              messageHandler(`Product " ${product.name} " deleted!`);
            }
            return null;
          })
        )
      );
    }
  };

  // deleteTempProduct parametriksi poistettavan tuotteen id ja poistaa sen temp[] tilasta
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
                filter={filter}
                productsToList={productsToList}
                shelfs={shelfs}
                setFilter={setFilter}
              />
            )}
          />

          <Route
            path="/add"
            render={() => (
              <AddPage
                messageHandler={messageHandler}
                shelfs={shelfs}
                setActive={setActive}
                setShelfs={setShelfs}
              />
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
            path="/shelfs"
            exact
            render={() => (
              <>
                <Shelfs
                  active={active}
                  deleteShelf={deleteShelf}
                  messageHandler={messageHandler}
                  shelfs={shelfs}
                  shelfIsEmpty={shelfIsEmpty}
                  setActive={setActive}
                />
              </>
            )}
          />

          <Route
            path={`/product/:id`}
            exact
            render={() => (
              <>
                <Product
                  active={active}
                  deleteProduct={deleteProduct}
                  messageHandler={messageHandler}
                  product={product}
                  setActive={setActive}
                  setTemp={setTemp}
                  shelfs={shelfs}
                  setShelfs={setShelfs}
                  takeProduct={takeProduct}
                />
              </>
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
                returnShelfNum={returnShelfNum}
                setProduct={setProduct}
                deleteTempProduct={deleteTempProduct}
                messageHandler={messageHandler}
              />
            )}
          />
          <Route path={"/settings"} exact render={() => <Settings />} />

          <Route
            path="/shelfs/:id"
            exact
            render={() => (
              <>
                <AddSlotForm
                  active={active}
                  addSlot={addSlot}
                  messageHandler={messageHandler}
                  shelf={shelfs[active.shelf]}
                />
                <Slots
                  active={active}
                  addSlot={addSlot}
                  deleteSlot={deleteSlot}
                  deleteTempProduct={deleteTempProduct}
                  messageHandler={messageHandler}
                  shelfs={shelfs}
                  product={product}
                  setActive={setActive}
                  setProduct={setProduct}
                  setShelfs={setShelfs}
                />
              </>
            )}
          />
        </Content>

        <Notification message={message} />
        <Cancel active={active} setActive={setActive} />
        <TempMenu temp={temp} active={active} setActive={setActive} />
        <Menu setActive={setActive} />
      </div>
    </Router>
  );
};

export default App;
