/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AddPage from './addpage';

test('add page buttons text', () => {
  render(
    <Router>
      <AddPage />
    </Router>
  );

  const addShelf = screen.getByText(/Add Shelfs/i);
  expect(addShelf).toBeInTheDocument();

  const addSlot = screen.getByText(/Add Slots/i);
  expect(addSlot).toBeInTheDocument();

  const addProduct = screen.getByText(/Add Product/i);
  expect(addProduct).toBeInTheDocument();
});
