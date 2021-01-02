import React, { useState } from "react";
import styles from "./search.module.scss";
import Content from "../content";

function Search(props) {
  const { shelfs, filter, setFilter } = props;

  const onChangeEvent = (e) => {
    console.log(`${filter}`);
    setFilter(e.target.value);
  };

  return (
    <div>
      <Content>
        <form>
          name: <input value={filter} onChange={onChangeEvent} />
        </form>
        output
      </Content>
    </div>
  );
}
export default Search;
