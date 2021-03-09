/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import TempMenu from '../menu/tempmenu';

//app startscreen test
test('App test: Header text + Search', () => {
  render(<App />);
  const header = screen.getByText(/Warehouse management system/i);
  expect(header).toBeInTheDocument();
  const search = screen.getByText(/Search/i);
  expect(search).toBeInTheDocument();
});
// Temp menu tests:
const testproduct = [
  {
    id: 12345,
    name: 'testi',
    barcode: 123456789,
    level: 1,
    slot: 2,
  },
];
const testproducts = [
  {
    id: 12341,
    name: 'testi1',
    barcode: 123456789,
    level: 1,
    slot: 2,
  },
  {
    id: 12342,
    name: 'testi2',
    barcode: 123456789,
    level: 1,
    slot: 2,
  },
  {
    id: 12343,
    name: 'testi3',
    barcode: 123456789,
    level: 1,
    slot: 2,
  },
];
test('App test: Temp menu bar: show name', () => {
  render(
    <Router>
      <TempMenu temp={testproduct} active={{ temp: true }} />
    </Router>
  );
  const testi = screen.getByText(/testi/i);
  expect(testi).toBeInTheDocument();
});

test('App test: Temp menu bar: show number of products', () => {
  render(
    <Router>
      <TempMenu temp={testproducts} active={{ temp: true }} />
    </Router>
  );
  const testi = screen.getByText(/3/i);
  expect(testi).toBeInTheDocument();
});
