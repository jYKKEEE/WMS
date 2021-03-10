/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Product from './product';

test('product test: Show buttons (Delete) (Take) (Locate):', () => {
  var testObj = { id: 12345, temp: false, name: 'testi' };
  render(
    <Router>
      <Product active={testObj} product={[testObj]} />
    </Router>
  );
  const testi = screen.getByText(/Delete/i);
  expect(testi).toBeInTheDocument();
  const testi2 = screen.getByText(/Take/i);
  expect(testi2).toBeInTheDocument();
  const testi3 = screen.getByText(/Locate/i);
  expect(testi3).toBeInTheDocument();
});

test('product test: Show buttons (Remove) (Return):', () => {
  var testObj = { id: 12345, temp: true, name: 'testi' };
  render(
    <Router>
      <Product active={testObj} product={[testObj]} />
    </Router>
  );
  const testi1 = screen.getByText(/Remove/i);
  expect(testi1).toBeInTheDocument();
  const testi2 = screen.getByText(/Return/i);
  expect(testi2).toBeInTheDocument();
});
