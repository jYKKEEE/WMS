import React, { useState } from "react";
import styles from "./search.module.scss";
import { Link } from "react-router-dom";

function Search(props) {
  const { filter, setFilter, productsToList } = props;

  const onChangeEvent = (e) => {
    console.log(`${filter}`);
    setFilter(e.target.value);
  };

  /*var hylly1 = {
    id: 1,
    slots: [{ barcode: Math.ceil(Math.random() * 9999999999),
        level: 0,
        slot: 1,
        products: [{ id: 65464, name: "jalka" }], },*/

  const output = productsToList()
    .filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((out, index) => <li key={index}>{out.name}</li>);

  if (output.length < 25) {
    return (
      <div className={styles.search_table}>
        <h2>Search</h2>
        name: <input value={filter} onChange={onChangeEvent} />
        {output}
      </div>
    );
  } else {
    return (
      <div className={styles.search_table}>
        <h2>Search</h2>
        name: <input value={filter} onChange={onChangeEvent} />
        <p>Too many products to display</p>
      </div>
    );
  }
}
export default Search;
