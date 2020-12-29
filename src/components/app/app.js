import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./app.module.scss";
import Header from "../header";
import Content from "../content";
import Search from "../search";
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
        products: [{ id: 7, name: "jalka" }],
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
            id: 1,
            name: "kissa",
          },
          {
            id: 2,
            name: "kivi",
          },
          {
            id: 3,
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
            id: 4,
            name: "rotta",
          },
          {
            id: 5,
            name: "kivi",
          },
          {
            id: 6,
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
            id: 8,
            name: "pena",
          },
          {
            id: 9,
            name: "timo",
          },
          {
            id: 10,
            name: "ville",
          },
        ],
      },
      {
        barcode: Math.ceil(Math.random() * 9999999999),
        level: 1,
        slot: 2,
        products: [
          {
            id: 12,
            name: "kitta",
          },
          {
            id: 13,
            name: "jyri",
          },
          {
            id: 14,
            name: "jasu",
          },
        ],
      },
    ],
  };

  const [shelfs, setShelfs] = useState([hylly1, hylly2, hylly3]);
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
        <Switch>
          <Route
            path={`/shelfs/${activeShelf + 1}/products`}
            exact
            render={() => (
              <Content>
                <Products shelf={shelfs[activeShelf]} />
              </Content>
            )}
          />
        </Switch>
        <Menu />
      </div>
    </Router>
  );
}

export default App;
