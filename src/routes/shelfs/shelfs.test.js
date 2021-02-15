/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Shelfs from './shelfs';
import data from '../../testdata.js';

test('render item from props data', () => {
  render(
    <Router>
      <Shelfs shelfs={data} active={{ deleteShelf: false }} />
    </Router>
  );

  const shelf = screen.getByText(/Shelf 1/i);
  expect(shelf).toBeInTheDocument();
  const shelf6 = screen.getByText(/Shelf 6/i);
  expect(shelf6).toBeInTheDocument();
  const emptyShelf = screen.getByText(/Empty/i);
  expect(emptyShelf).toBeInTheDocument();
});
