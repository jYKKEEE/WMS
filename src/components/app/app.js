import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./app.module.scss";
import Header from "../header";
import Content from "../content";
import Scanner from "../scanner";
import AddShelf from "../shelf/addShelf";
import Shelfs from "../shelfs";
import Menu from "../menu";
import Products from "../products";

function App() {
  var hylly1 = {
    id: 1,
    slots: [
      {
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 0,
        slot: 1,
        products: [
          { name: "kala", barcode: Math.ceil(Math.random(1) * 10000000) },
        ],
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
          { name: "kissa", barcode: Math.ceil(Math.random(1) * 10000000) },
          { name: "kivi", barcode: Math.ceil(Math.random(1) * 10000000) },
          { name: "koira", barcode: Math.ceil(Math.random(1) * 10000000) },
        ],
      },
      {
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 3,
        slot: 2,
        products: [
          { name: "rotta", barcode: Math.ceil(Math.random(1) * 10000000) },
          { name: "kivi", barcode: Math.ceil(Math.random(1) * 10000000) },
          { name: "kallio", barcode: Math.ceil(Math.random(1) * 10000000) },
        ],
      },
    ],
  };

  const [shelfs, setShelfs] = useState([hylly1, hylly2]);
  const [activeShelf, setActiveShelf] = useState(0);
  console.log(`active: ${activeShelf}`);

  const activeShelfHandler = (id) => {
    setActiveShelf(id);
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
          path="/"
          exact
          render={() => (
            <Content>
              <Scanner />
            </Content>
          )}
        />
        <Route
          path="/shelfs"
          render={() => (
            <Content>
              <Shelfs shelfs={shelfs} activeShelfHandler={activeShelfHandler} />
            </Content>
          )}
        />
        <Route
          path="/products"
          exact
          render={() => (
            <Content>
              <Products shelf={shelfs[activeShelf]} />
            </Content>
          )}
        />
        <Menu />
      </div>
    </Router>
  );
}

export default App;
