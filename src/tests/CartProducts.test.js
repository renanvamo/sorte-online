import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './utils/renderWithRouter';
import '@testing-library/jest-dom';

import CartProducts from '../components/CartProducts';

describe('Testing component CartProducts', () => {
  it('if table is rendering', () => {
    renderWithRouter(<CartProducts />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('if table has 3 columns, Product, Quantity and Price', () => {
    renderWithRouter(<CartProducts />);
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Quantity')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
  });


  it('if totalPrice is visible', () => {
    renderWithRouter(<CartProducts />);
    expect(screen.getByText(/Total Price/)).toBeInTheDocument();
  });
});
