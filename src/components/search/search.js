import { Link } from "react-router-dom";
import styles from "./search.module.scss";

function Search(props) {
  const { filter, handleStatesByProductId, productsToList, setFilter } = props;

  const onChangeEvent = (e) => {
    console.log(`${filter}`);
    setFilter(e.target.value);
  };

  const output = productsToList()
    .filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((out, index) => (
      <Link
        key={index}
        to={`/product/${out.id}`}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => {
          handleStatesByProductId(out.id);
        }}
      >
        <li key={index}>{out.name}</li>
      </Link>
    ));

  if (output.length < 25) {
    return (
      <div className={styles.search_table}>
        <h2>Search</h2>
        <input value={filter} onChange={onChangeEvent} />
        {output}
      </div>
    );
  } else {
    return (
      <div className={styles.search_table}>
        <h2>Search</h2>
        <input value={filter} onChange={onChangeEvent} />
        <p>Too many products to display</p>
      </div>
    );
  }
}
export default Search;
