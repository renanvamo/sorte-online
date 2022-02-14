import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './utils/renderWithRouter';
import '@testing-library/jest-dom';

import Header from '../components/Header';

describe('Testing component Header', () => {
  it('if the buttons and Logo are showing', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Dev Store')).toBeInTheDocument();
    expect(screen.getByText('DS')).toBeInTheDocument();
    expect(screen.getByAltText('Shopping cart item')).toBeInTheDocument();
  });

  it('if cart items are 0', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
