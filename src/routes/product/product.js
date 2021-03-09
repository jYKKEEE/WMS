/* eslint-disable indent */
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styles from './product.module.scss';

import Button from '../../components/button/button';
// tuotteen näkymä
function Product(props) {
  const {
    active,
    deleteProduct,
    messageHandler,
    returnShelfNum,
    product,
    shelfs,
    setActive,
    setProduct,
    takeProduct,
  } = props;

  let { id } = useParams();
  const history = useHistory();

  // luodaan tulostettava product. Mikäli käyttäjä päivittää sivun, haetaan tuote shelfs tilasta :id perusteella
  var returnedProduct = product;
  shelfs
    ? shelfs.map((shelf) =>
        shelf.slots.map((mapSlot) =>
          mapSlot.products.map((product) => {
            if (product.id === parseInt(id)) {
              returnedProduct = product;
            }
            return null;
          })
        )
      )
    : console.log();

  //takeProduct ottaa hyllystä id:tä vastaavan tuotteen ja siirtää temp "hyllyyn"

  if (returnedProduct.id === 0) {
    return (
      <div className={styles.badState}>
        Product Not Found
        <Button text={'Back'} link={'/'} action={() => {}} />
      </div>
    );
  }
  if (active.temp) {
    return (
      <div>
        <div className={styles.product}>
          <div className={styles.product_data}>
            <div className={styles.product_nameTemp}>
              <h2>{returnedProduct.name}</h2>
            </div>
            <div className={styles.buttons}>
              <Button
                text={'Remove'}
                action={() => {
                  deleteProduct(returnedProduct.id);
                  messageHandler(
                    `Product " ${returnedProduct.name} " removed!`
                  );
                }}
                link={'/tempview'}
              />
              <Button
                text={'Return'}
                action={() => {
                  setActive((prevState) => ({
                    ...prevState,
                    add: true,
                    temp: true,
                  }));
                  setProduct({
                    id: returnedProduct.id,
                    name: returnedProduct.name,
                    slot: returnedProduct.slot,
                    level: returnedProduct.level,
                    barcode: returnedProduct.barcode,
                  });
                  messageHandler(`Select shelf for '${returnedProduct.name}'`);
                }}
                link={'/shelfs'}
              />
            </div>
            <div>
              <ul>id: {returnedProduct.id}</ul>
              <ul>
                Previous
                <button
                  className={styles.ean}
                  onClick={() => {
                    messageHandler(
                      `${returnedProduct.name} were in shelf${returnShelfNum(
                        returnedProduct.barcode
                      )}: slot: ${returnedProduct.slot}, level:${
                        returnedProduct.level
                      } `
                    );
                  }}
                >
                  EAN
                </button>
                :{returnedProduct.barcode}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.product}>
          <div className={styles.product_name}>
            <h2>{returnedProduct.name}</h2>
          </div>
          <div className={styles.product_data}>
            <ul>id: {returnedProduct.id}</ul>
            <ul>EAN:{returnedProduct.barcode}</ul>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            text={'Delete'}
            action={() => {
              deleteProduct(returnedProduct.id);
            }}
            link={`/shelfs/${active.shelf + 1}`}
          />
          <Button
            text={'Take'}
            action={() => {
              takeProduct(returnedProduct.id);
              history.push('/shelfs');
            }}
            link={`/shelfs/${active.shelf + 1}`}
          />
          <Button
            text={'Locate'}
            action={() => {
              messageHandler(
                `Find ${returnedProduct.name} @ Shelf${
                  active.shelf + 1
                }: slot:${returnedProduct.slot},level:${returnedProduct.level}.`
              );
            }}
            link={''}
          />
        </div>
      </div>
    );
  }
}

export default Product;
