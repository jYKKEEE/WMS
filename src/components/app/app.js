import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./app.module.scss";

//Komponentit
import AddPage from "../addPage";
import AddForm from "../product/addForm";
import AddSlotButton from "../button/addSlotButton";
import Cancel from "../button/cancelbutton";
import Content from "../content";
import Header from "../header";
import Menu from "../menu/menu";
import Notification from "../notification";
import Product from "../product/product";
import Shelfs from "../shelfs";
import Slots from "../slots/slots";
import Settings from "../settings";
import Search from "../search";
import TempMenu from "../menu/tempMenu";
import TempView from "../tempView";

const App = () => {
  var hylly1 = {
    id: 1,
    slots: [
      {
        barcode: 8512758022,
        slot: 1,
        level: 0,
        products: [
          {
            id: 65464,
            name: "Autonrengas",
            barcode: 8512758022,
            slot: 1,
            level: 0,
          },
          {
            id: 65469,
            name: "Pakoputki",
            barcode: 8512758022,
            slot: 1,
            level: 0,
          },
          {
            id: 65471,
            name: "Moottoriöljy",
            barcode: 8512758022,
            level: 0,
            slot: 1,
          },
        ],
      },
      {
        barcode: 8512758023,
        level: 0,
        slot: 2,
        products: [
          {
            id: 65466,
            name: "Moottori",
            barcode: 8512758023,
            level: 0,
            slot: 2,
          },
        ],
      },
      {
        barcode: 8512758024,
        level: 1,
        slot: 2,
        products: [
          {
            id: 65399,
            name: "Tuulilasi",
            barcode: 8512758024,
            level: 1,
            slot: 2,
          },
          {
            id: 65473,
            name: "Tunkki",
            barcode: 8512758024,
            level: 1,
            slot: 2,
          },
          {
            id: 65499,
            name: "Jarrupalat",
            barcode: 8512758024,
            level: 1,
            slot: 2,
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
            name: "Kissan hiekkaa",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
          {
            id: 34523,
            name: "Kiviä",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
          {
            id: 34589,
            name: "Jakoavain",
            barcode: 1630990742,
            level: 0,
            slot: 1,
          },
          {
            id: 87657,
            name: "Vasara",
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
            name: "Nauloja",
            barcode: 3377625525,
            level: 3,
            slot: 2,
          },
          {
            id: 34523,
            name: "Tietokone",
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
            name: "Kirjoja",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
          {
            id: 37654,
            name: "Taulu",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
          {
            id: 49823,
            name: "Kahvinkeitin",
            barcode: 9723898802,
            level: 0,
            slot: 1,
          },
          {
            id: 49824,
            name: "Näyttötyö",
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
            name: "Kitara",
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
            name: "Plektroja",
            level: 1,
            slot: 2,
            barcode: 9800815975,
          },
        ],
      },
    ],
  };
  var hylly4 = {
    id: 4,
    slots: [
      {
        barcode: 8512751234,
        slot: 1,
        level: 0,
        products: [
          {
            id: 98765,
            name: "Polkupyörän runko",
            barcode: 8512751234,
            slot: 1,
            level: 0,
          },
          {
            id: 67654,
            name: "Polkupyörän rengas",
            barcode: 8512751234,
            slot: 1,
            level: 0,
          },
          {
            id: 66543,
            name: "Ohjaustanko",
            barcode: 8512751234,
            slot: 1,
            level: 0,
          },
        ],
      },
      {
        barcode: 8512751235,
        level: 0,
        slot: 2,
        products: [
          {
            id: 61234,
            name: "Polkimet",
            barcode: 8512751235,
            level: 0,
            slot: 2,
          },
        ],
      },
      {
        barcode: 8512751238,
        level: 1,
        slot: 2,
        products: [
          {
            id: 64321,
            name: "Jarruvaijeri",
            barcode: 8512751238,
            level: 1,
            slot: 2,
          },
          {
            id: 54321,
            name: "Takavalo",
            barcode: 8512751238,
            level: 1,
            slot: 2,
          },
          {
            id: 99875,
            name: "Polkupyörän ketjut",
            barcode: 8512751238,
            level: 1,
            slot: 2,
          },
        ],
      },
    ],
  };

  const [shelfs, setShelfs] = useState([hylly1, hylly2, hylly3, hylly4]);
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

  /* console.log(`product add: ${active.add}`);
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

  /*returnShelfNum parametriksi tuotteen barcode-jäsen niin palauttaa hyllyn numeron.
  käytetään tempview komponentissa jotta käyttäjä tietää tuotteen edellisen hylly paikan */
  const returnShelfNum = (productBarcode) => {
    var out = null;
    shelfs.map((shelf) => {
      shelf.slots.map((slot) => {
        if (slot.barcode === productBarcode) {
          out = shelf.id;
        }
      });
    });
    return out;
  };

  /*handleStatesByProductId parametri ottaa vastaan luvun jonka mukaan etsi varastosta tuotteen ja asettaa tilat tuotteen speksejä vastaaviksi*/
  const handleStatesByProductId = (productId) => {
    var bool = false;
    shelfs.map((shelf) =>
      shelf.slots.map((mapSlot) => {
        mapSlot.products.map((product) => {
          if (product.id === productId) {
            setActive((prevState) => ({ ...prevState, shelf: shelf.id - 1 }));
            setProduct({
              id: product.id,
              name: product.name,
              level: product.level,
              slot: product.slot,
              barcode: product.barcode,
            });
            bool = true;
            return null;
          }
          return null;
        });
        return null;
      })
    );
    return bool;
  }; //<-- käytetaan search komponentissä
  // shelfIsEmpty parametriksi annetaan mäpätty shelfs indeksi
  const shelfIsEmpty = (index) => {
    var out = 0;
    shelfs[index].slots.map((slot) => (out += slot.products.length));
    return out === 0;
  }; //<-- katsoo onko hyllyssä tuotteita.

  //takeProduct ottaa hyllystä id:tä vastaavan tuotteen ja siirtää temp "hyllyyn"
  const takeProduct = (id) => {
    var array = shelfs[active.shelf];
    array.slots.map((mapSlot) => {
      if (mapSlot.slot === product.slot && mapSlot.level === product.level) {
        mapSlot.products.map((ware, index) => {
          if (ware.id === id) {
            setTemp(temp.concat(ware));
            mapSlot.products.splice(index, 1);
            //slot.splice(indeksi, montaPoistetaan);
            setActive((prevState) => ({
              ...prevState,
              deleteProduct: false,
            }));
            setShelfs(
              (prevState) => [...prevState],
              (shelfs[active.shelf] = array)
            );
            // console.log(`take product works!`);
          }
          return null;
        });
      }
      return null;
    });
  };
  //messageHandler hallitsee Notifications-komponentin tulostetta, parametriksi merkkijono / mj muuttuja.
  const messageHandler = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3200);
  };

  //productsToList ottaa koko varaston tuotteet yhdelle listalle ...components\search
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

  // addSlot lisää uuden hyllypaikan
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
      console.log(`poistooon!: ${index}`);
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
    var q = prompt(`Really want to delete?`, `yes`);
    console.log(`vastaus: ${q}`);
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
              messageHandler(`Product " ${product.name} " deleted!`);
            }
            return null;
          });
        }
        return null;
      });
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
                handleStatesByProductId={handleStatesByProductId}
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
                <AddSlotButton
                  addSlot={addSlot}
                  messageHandler={messageHandler}
                  shelf={shelfs[active.shelf]}
                />
                <Cancel active={active} setActive={setActive} />
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
                  handleStatesByProductId={handleStatesByProductId}
                  messageHandler={messageHandler}
                  product={product}
                  setActive={setActive}
                  takeProduct={takeProduct}
                />
                <Cancel active={active} setActive={setActive} />
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
        </Content>
        <Notification message={message} />
        <TempMenu temp={temp} active={active} setActive={setActive} />
        <Menu setActive={setActive} />
      </div>
    </Router>
  );
};

export default App;
