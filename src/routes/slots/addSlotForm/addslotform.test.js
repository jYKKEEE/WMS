/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import data from '../../../testdata.js';
import AddSlotForm from './addslotform.js';

test('Slot test: show product names & barcode', () => {
  var testObj = { add: false, addSlot: true, name: 'testi' };
  render(
    <Router>
      <AddSlotForm shelf={data[0]} active={testObj} />
    </Router>
  );

  const testi3 = screen.getByText(/Insert slot number:/i);
  expect(testi3).toBeInTheDocument();
  const testi4 = screen.getByText(/Insert level number:/i);
  expect(testi4).toBeInTheDocument();
  const testi5 = screen.getByText(/Add slot/i);
  expect(testi5).toBeInTheDocument();
});
