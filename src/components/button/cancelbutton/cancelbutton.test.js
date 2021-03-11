/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Shelfs from '../../../routes/shelfs';
import data from '../../../testdata.js';
import Cancel from './cancel';

test('CancelButton test: button hidden while states false', () => {
  render(
    <Router>
      <Shelfs
        shelfs={data}
        active={{
          deleteShelf: false,
        }}
      />
      <Cancel
        active={{
          deleteShelf: false,
          add: false,
          addSlot: false,
          deleteProduct: false,
          deleteSlot: false,
          edit: false,
          temp: false,
        }}
      />
    </Router>
  );

  const cancelButton = screen.queryByText('Cancel');
  expect(cancelButton).toBeNull();
});

test('CancelButton test: button visible while states true', () => {
  render(
    <Router>
      <Shelfs
        shelfs={data}
        active={{
          deleteShelf: false,
        }}
      />
      <Cancel
        active={{
          deleteShelf: false,
          add: false,
          addSlot: true,
          deleteProduct: false,
          deleteSlot: false,
          edit: false,
          temp: false,
        }}
      />
    </Router>
  );

  const cancelButton = screen.getByText(/Cancel/i);
  expect(cancelButton).toBeInTheDocument();
});
