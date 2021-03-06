import React from 'react';
import styles from './addpage.module.scss';
import AddShelf from '../../components/shelf/addshelf';
import Button from '../../components/button/button';

/*AddPage-komponentti sisältää toiminnot lisäämiseen ja poistamiseen.
<Buttonit> reitittää käyttäjän seuraavin vaiheisiin */
function AddPage(props) {
  const { messageHandler, shelfs, setActive, addShelf } = props;

  return (
    <div className={styles.addPage}>
      <h3>Shelf:</h3>
      {/*AddShelf lisää uuden seuraavan vapaan hyllyn */}
      <AddShelf
        shelfs={shelfs}
        addShelf={addShelf}
        messageHandler={messageHandler}
      />
      <h1>Slots:</h1>
      <Button
        text={'Add Slots'}
        link={'/shelfs'}
        action={() => {
          setActive((prevState) => ({
            ...prevState,
            deleteProduct: false,
            deleteSlot: false,
            deleteShelf: false,
            add: false,
            edit: false,
            addSlot: true,
          }));
          messageHandler('Select shelf to add a new slot');
        }}
      />
      <h1>Product:</h1>
      <Button text={'Add product'} link={'/addform'} action={() => {}} />
      <h1>Delete:</h1>
      <Delete setActive={setActive} />
    </div>
  );
}
/*sivun Delete osio luettavuuden takia eri komponentissä.
kunkin painikkeen mukaan vaihdetaan deletemuokkastiloja shelf,slot,product */
function Delete({ setActive }) {
  return (
    <div className={styles.delete_buttons}>
      <div>
        <Button
          text={'Shelfs'}
          link={'/shelfs'}
          action={() => {
            setActive((prevState) => ({
              ...prevState,
              deleteProduct: false,
              deleteSlot: false,
              edit: false,
              add: false,
              addSlot: false,
              deleteShelf: true,
            }));
          }}
        />
      </div>
      <div>
        <Button
          text={'Slots'}
          link={'/shelfs'}
          action={() => {
            setActive((prevState) => ({
              ...prevState,
              deleteProduct: false,
              edit: false,
              add: false,
              addSlot: false,
              deleteShelf: false,
              deleteSlot: true,
            }));
          }}
        />
      </div>
      <div>
        <Button
          text={'Products'}
          link={'/shelfs'}
          action={() => {
            setActive((prevState) => ({
              ...prevState,
              deleteProduct: true,
              deleteSlot: false,
              edit: false,
              add: false,
              addSlot: false,
              deleteShelf: false,
            }));
          }}
        />
      </div>
    </div>
  );
} /*<<-- Delete painikkeet omassa komponentissa,
  jokainen <Button/> muuttaa delete-tiloja nimensä mukaisesti.
  Omassa komponentissä koodin selkeyttämiseksi.
*/
export default AddPage;
