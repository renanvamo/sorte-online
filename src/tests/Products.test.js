import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './utils/renderWithRouter';
import '@testing-library/jest-dom';

import Products from '../components/Products';

describe('Testing component Products', () => {
  it('if is showing 8 products', () => {
    renderWithRouter(<Products />);
    expect(screen.getAllByTestId('product-card')).toHaveLength(8);
  });
});
