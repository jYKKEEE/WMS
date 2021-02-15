/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import AddShelf from './addshelf';

test('addShelf button text', () => {
  render(<AddShelf />);

  const addShelf = screen.getByText(/Add Shelfs/i);
  expect(addShelf).toBeInTheDocument();
});
