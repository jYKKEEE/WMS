/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './search';
import data from '../../testdata.js';

test('Search input test1: letters', () => {
  const productsToList = () => {
    var array = [];
    data.map((shelf) => {
      shelf.slots.map((slot) => {
        slot.products.map((product) => array.push(product));
        return null;
      });
      return null;
    });
    return array;
  };

  render(
    <Router>
      <Search filter={'AU'} productsToList={productsToList} shelfs={data} />
    </Router>
  );

  const autonrengas = screen.getByText(/Autonrengas/i);
  expect(autonrengas).toBeInTheDocument();
  const taulu = screen.getByText(/Taulu/i);
  expect(taulu).toBeInTheDocument();
});

test('Search input test2: Numbers', () => {
  const productsToList = () => {
    var array = [];
    data.map((shelf) => {
      shelf.slots.map((slot) => {
        slot.products.map((product) => array.push(product));
        return null;
      });
      return null;
    });
    return array;
  };

  render(
    <Router>
      <Search filter={987} productsToList={productsToList} shelfs={data} />
    </Router>
  );

  const polkupyoranrunko = screen.getByText(/Polkupyörän runko/i);
  expect(polkupyoranrunko).toBeInTheDocument();
});
test('Search input test2: asfdse', () => {
  const productsToList = () => {
    var array = [];
    data.map((shelf) => {
      shelf.slots.map((slot) => {
        slot.products.map((product) => array.push(product));
        return null;
      });
      return null;
    });
    return array;
  };

  render(
    <Router>
      <Search filter={'asfdse'} productsToList={productsToList} shelfs={data} />
    </Router>
  );

  const asfdse = screen.getByText(/No products to display by `asfdse`./i);
  expect(asfdse).toBeInTheDocument();
});
