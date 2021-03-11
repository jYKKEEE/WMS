/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import data from '../../../testdata.js';
import Slot from './slot.js';

test('Slot test: show product names & barcode', () => {
  var testObj = { add: false, deleteSlot: false, name: 'testi' };
  render(
    <Slot
      active={testObj}
      barcode='123456789'
      level='123'
      shelf={data[2]}
      slot='123'
      products={['testi1', 'testi2', 'testi321']}
    />
  );
  const testi1 = screen.getByText(/testi1/i);
  expect(testi1).toBeInTheDocument();
  const testi2 = screen.getByText(/123456789/i);
  expect(testi2).toBeInTheDocument();
  const testi3 = screen.getByText(/testi321/i);
  expect(testi3).toBeInTheDocument();
  const addButton = screen.queryByText('Add here');
  expect(addButton).toBeNull();
  const deleteButton = screen.queryByText('Delete this slot');
  expect(deleteButton).toBeNull();
});
test('Slot test: dont show buttons when states false ', () => {
  var testObj = { add: false, deleteSlot: false, name: 'testi' };
  render(
    <Slot
      active={testObj}
      barcode='123456789'
      level='123'
      shelf={data[2]}
      slot='123'
      products={['testi1', 'testi2', 'testi321']}
    />
  );
  const addButton = screen.queryByText('Add here');
  expect(addButton).toBeNull();
  const deleteButton = screen.queryByText('Delete this slot');
  expect(deleteButton).toBeNull();
});

test('addslotbutton test: Show button (Add here):', () => {
  var testObj = { add: true, deleteSlot: false, name: 'testi' };
  render(
    <Router>
      <Slot
        active={testObj}
        barcode='123456789'
        level='123'
        shelf={data[2]}
        product={testObj}
        slot='123'
        products={['testi1', 'testi2', 'testi']}
      />
    </Router>
  );
  const testi = screen.getByText(/Add here/i);
  expect(testi).toBeInTheDocument();
});

test('Deleteslot test: Show button (Delete this slot)', () => {
  var testObj = { add: false, deleteSlot: true, name: 'testi' };
  render(
    <Router>
      <Slot
        active={testObj}
        barcode='123456789'
        level='123'
        shelf={data[2]}
        slot='123'
        products={['testi1', 'testi2', 'testi']}
      />
    </Router>
  );
  const testi = screen.getByText(/Delete this slot/i);
  expect(testi).toBeInTheDocument();
});
