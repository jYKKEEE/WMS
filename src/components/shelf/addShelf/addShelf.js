import React from 'react';
import Button from '../../button/button';

//palauttaa Buttonin joka luo uuden hyllyn ja ilmoittaa käyttäjälle luonnista messagehandlerilla
function AddShelf(props) {
  const { shelfs, addShelf, messageHandler } = props;

  const nextFreeShelfNum = () => {
    const array = [];

    shelfs.map((shelf) => array.push(parseInt(shelf.id)));
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== i + 1) {
        return i + 1;
      }
    }
    return array.length + 1;
  }; // <-- palauttaa seuraavan vapaan hyllynumeron

  /*newShelfHandler luo uuden hyllyn varastoon.
  tarkistaa nextFreeShelfNum funktion avulla seuraavan vapaan numeron.*/
  const newShelfHandler = () => {
    console.log(nextFreeShelfNum());
    var shelfNum = nextFreeShelfNum();
    /* tämä toiminnallisuus käyttöön jos useampi tai isompi varasto. Pyytää käyttäjää määrittämään itse hyllynumeron
    //1.kysy hyllynumero kunnes antaa numeron tai painaa peruuta
    var shelfNumber = prompt(`Give number to a new shelf:`, nextFreeShelfNum());
    // addNewShell true:lla pääsee läpi false ei tee mitään
    var addNewShell = true;

    while (true) {
      //jos painaa cancel ni poistutaan
      if (shelfNumber === null) {
        addNewShell = false;
        return false;
      }
      // jos varastoon tyhjä ja käyttäjä antaa hyllylle numeron(Int) niin ei suoriteta testejä...
      if (shelfs.length === 0 && !isNaN(parseInt(shelfNumber))) {
        addNewShell = true;
      }
      //...muuten: valitse hylly uusiks jos käyttäjä syötti kirjaimen
      else if (isNaN(parseInt(shelfNumber))) {
        addNewShell = false;
        shelfNumber = prompt(
          `Try again!\nGive number to new shelf: `,
          nextFreeShelfNum()
        );
      } else {
        /*kysytään hyllyn numeroa niin kauan kunnes
            painetaan cancel tai löytyy numero joka ei ole käytössä
        let i = 0;
        while (true) {
          if (isNaN(parseInt(shelfNumber))) {
            addNewShell = false;
            break;
          }
          /* -katotaan löytyykö annettu hylly jo numero varastosta
                 -valitaan hyllynumero uusiks jos valittu oli jo käytössä.
                 -iin arvo nollaan(0) ja suoritetaan testit alusta

          if (parseInt(shelfs[i].id) === parseInt(shelfNumber)) {
            addNewShell = false;
            i = 0;
            shelfNumber = prompt(
              `Shelf number (${shelfNumber}) is in use, pick another number`,
              nextFreeShelfNum()
            );
          } else if (i === shelfs.length - 1) {
            addNewShell = true;
            break;
          } else {
            i++;
          }
        }
      }
      //katkaistaan eka looppi jos testit läpi
      if (addNewShell === true) {
        break;
      }
    }
    // hyllyn lisäys warehouse listaan
    if (addNewShell === true) {
      /*luodaan lista "levels" josta tulee hyllyn tasojen määrä
            jos käyttäjä painaa cancel, peruutetaan kaikki. jos syöttää kirjaimen ni ei tehä mitää-
            DONELLA VIIMEISTELLÄÄN LISÄYS */
    var newShelf = { id: shelfNum, slots: [] };
    addShelf(newShelf);

    messageHandler(`Shelf number: ${newShelf.id} added`);
  }; // <-- TOIMII......

  return (
    <div>
      <Button text={'Add Shelfs'} link={''} action={newShelfHandler} />
    </div>
  );
}
export default AddShelf;
