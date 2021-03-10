/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Slots from './slots';

import data from '../../../testdata.js';

test('Slots test: show product names & barcode', () => {
  var testObj = { add: false, temp: true, name: 'testi' };
  /*active,
    deleteSlot,
    deleteTempProduct,*/

  render(
    <Router>
      <Slots shelfs={data} active={testObj} />
    </Router>
  );

  const testi1 = screen.getByText(/Rengasavain/i);
  expect(testi1).toBeInTheDocument();
  const testi2 = screen.getByText(/Autonrengas/i);
  expect(testi2).toBeInTheDocument();
  const testi3 = screen.getByText(/slot:1, level: 0/i);
  expect(testi3).toBeInTheDocument();
  const testi4 = screen.getByText(/slot:1, level: 2/i);
  expect(testi4).toBeInTheDocument();
});
