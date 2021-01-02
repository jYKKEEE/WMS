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
import AddPage from "../addPage";
import AddForm from "../product/add/addForm";

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
  const [active, setActive] = useState({ shelf: 0, productId: 0, barcode: 0 });
  const [filter, setFilter] = useState("");
  const [product, setProduct] = useState({
    edit: false,
    add: false,
    addSlot: false,
    id: 0,
    name: "",
    level: 0,
    slot: 0,
  });

  console.log(`product add: ${product.add}`);
  console.log(`product addSlot: ${product.addSlot}`);
  console.log(`product edit: ${product.edit}`);
  console.log(`active Product: ${product.name} ja ${product.id}`);
  console.log(`active Shelf: ${active.shelf}`);
  console.log(`active barcode: ${active.barcode}`);
  console.log(`filter: ${filter}`);

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
              />
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
                product={product}
                setProduct={setProduct}
                shelfs={shelfs}
                setActive={setActive}
              />
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
                setActive={setActive}
                product={product}
                setProduct={setProduct}
              />
            </Content>
          )}
        />
        <Route
          path={`/${active.barcode}/${active.productId}`}
          render={() => (
            <Content>
              <Product shelf={shelfs[active.shelf]} product={product} />
            </Content>
          )}
        />
        <Route
          path={"/addform"}
          exact
          render={() => (
            <Content>
              <AddForm setProduct={setProduct} />
            </Content>
          )}
        />
        <Menu />
      </div>
    </Router>
  );
}
export default App;
