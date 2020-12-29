import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./app.module.scss";
import Header from "../header";
import Content from "../content";
import Search from "../search";
import AddShelf from "../shelf/addShelf";
import Shelfs from "../shelfs";
import Menu from "../menu";
import Slots from "../slots";
import Product from "../product";

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

  const [shelfs, setShelfs] = useState([hylly1, hylly2, hylly3]);
  const [activeShelf, setActiveShelf] = useState(0);
  const [activeProductId, setActiveProductId] = useState(0);
  const [barcode, setBarcode] = useState(0);
  const [product, setProduct] = useState({});

  console.log(`active Shelf: ${activeShelf}`);
  console.log(`active Shelf plus 1: ${activeShelf + 1}`);
  console.log(`active barcode: ${barcode}`);
  console.log(`active Product: ${activeProductId}`);

  //funktiot, jolla tuodaan tilat alemmilta tasoilta
  const activeShelfHandler = (id) => {
    setActiveShelf(id);
  };
  const activeProductHandler = (id) => {
    setActiveProductId(id);
  };
  const barcodeHandler = (barcode) => {
    setBarcode(barcode);
  };
  const productHandler = (product) => {
    setProduct(product);
  };

  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Route
          path="/add"
          render={() => (
            <Content>
              <AddShelf shelfs={shelfs} setShelfs={setShelfs} />
              <button>Add Product</button>
            </Content>
          )}
        />
        <Route
          path="/search"
          exact
          render={() => (
            <Content>
              <Search />
            </Content>
          )}
        />
        <Route
          path="/shelfs"
          exact
          render={() => (
            <Content>
              <Shelfs shelfs={shelfs} activeShelfHandler={activeShelfHandler} />
            </Content>
          )}
        />
        <Route
          path={`/shelfs/${activeShelf + 1}`}
          exact
          render={() => (
            <Content>
              <Slots
                shelf={shelfs[activeShelf]}
                activeProductHandler={activeProductHandler}
                barcodeHandler={barcodeHandler}
                productHandler={productHandler}
              />
            </Content>
          )}
        />

        <Route
          path={`/${barcode}/${activeProductId}`}
          render={() => (
            <Content>
              <Product shelf={shelfs[activeShelf]} product={product} />
            </Content>
          )}
        />

        <Menu />
      </div>
    </Router>
  );
}
// /
export default App;
