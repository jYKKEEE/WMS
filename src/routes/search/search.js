import React from 'react';
import { Link } from 'react-router-dom';
import styles from './search.module.scss';

/*Search on input, joka filtteröi ja näyttää varastossa olevia tuotteita annetuilla arvoilla.
Jokainen listan tuote on <Linkki> jota painamalla ohjataan Product näkymään
*/
function Search(props) {
  const { filter, productsToList, setFilter } = props;

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
      <Link key={index} to={`/product/${out.id}`} onClick={() => {}}>
        <p key={index} className={styles.list}>{`${out.name} `}</p>
      </Link>
    ));

  if (productsToList().length > 0 && output.length === 0) {
    return (
      <div className={styles.search_table}>
        <h2>Search</h2>
        <input
          value={filter}
          onChange={onChangeEvent}
          placeholder='Search by name or id:'
        />
        <p className={styles.filterText_first}>
          No products to display by `{filter}`.
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.search_table}>
        <h2>Search</h2>
        <input
          value={filter}
          onChange={onChangeEvent}
          placeholder='Search by name or id:'
        />
        {output.length < 25 ? (
          <>{output}</>
        ) : (
          <div className={styles.filterText}>
            <p className={styles.filterText_first}>
              Too many products to display
            </p>
            <p className={styles.filterText_second}>
              Filter products by writing something
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
