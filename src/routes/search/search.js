import { Link } from "react-router-dom";
import styles from "./search.module.scss";

/*Search on input, joka filtteröi ja näyttää varastossa olevia tuotteita annetuilla arvoilla.
Jokainen listan tuote on <Linkki> jota painamalla ohjataan Product näkymään
*/
function Search(props) {
  const { filter, handleStatesByProductId, productsToList, setFilter } = props;

  //inputin value talteen
  const onChangeEvent = (e) => {
    console.log(`${filter}`);
    setFilter(e.target.value);
  };

  /* return output.
    RIVIT:
    19. tuotteet olio listaksi
    21. filtteroidaan lista filter-propsien mukaan
    22. syöte ja olio samanmuotoiseksi
    27. mäppäys listan tuotteille ja luodaan linkki jokaisesta
    40. jos filtteri palauttaa enemmän kuin 24 tuotetta niin ilmoitetaan listan olevan liian pitkä
  */
  const output = productsToList()
    .filter((product) => {
      if (isNaN(parseInt(filter))) {
        return product.name.toLowerCase().includes(filter.toLowerCase());
      } else {
        return product.id.toString().includes(filter);
      }
    })
    .map((out, index) => (
      <Link
        key={index}
        to={`/product/${out.id}`}
        onClick={() => {
          handleStatesByProductId(out.id);
        }}
      >
        <p key={index} className={styles.list}>{`${out.name} `}</p>
      </Link>
    ));

  if (output.length < 25) {
    return (
      <div className={styles.search_table}>
        <h2>Search</h2>
        <input
          value={filter}
          onChange={onChangeEvent}
          placeholder="Insert Name or Id"
        />
        {output}
      </div>
    );
  } else {
    return (
      <div className={styles.search_table}>
        <h2>Search</h2>
        <input
          value={filter}
          onChange={onChangeEvent}
          placeholder="Insert Name or Id"
        />
        <p>Too many products to display</p>
      </div>
    );
  }
}
export default Search;
