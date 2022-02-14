import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './utils/renderWithRouter';
import '@testing-library/jest-dom';

import Card from '../components/Card';

describe('Testing component Card', () => {
  const renderCard = () => (
    renderWithRouter(
      <Card
        id={ 1 } 
        title='Celular'
        image='http://imagemdoproduto.com.br'
        description='Descrição do celular. Descrição do celular'
        price={ 5000 }
        priceDiscount={ 4000 }
      />
    )
  );

  it('if has an image', () => {
    renderCard();
    expect(screen.getByAltText(/imagem do produto/)).toBeInTheDocument();
  });

  it('if the title is visible', () => {
    renderCard();
    expect(screen.getByText('Celular')).toBeInTheDocument();
  });

  it('if the description is visible', () => {
    renderCard();
    expect(screen.getByText(/Descrição do celular/)).toBeInTheDocument();
  });

  it('if price is visible as an old price', () => {
    renderCard();
    expect(screen.getByTestId('old-price')).toBeVisible();
    expect(screen.getByTestId('old-price')).toHaveTextContent('$5,000.00');
    expect(screen.getByTestId('old-price')).toHaveClass('old-price');
  });

  it('if priceDiscount is visible as an current price', () => {
    renderCard();
    expect(screen.getByTestId('current-price')).toBeVisible();
    expect(screen.getByTestId('current-price')).toHaveTextContent('$4,000.00');
    expect(screen.getByTestId('current-price')).toHaveClass('current-price');
  });

  it('if has a button "add to cart"', () => {
    renderCard();
    expect(screen.getByText('add to cart +')).toBeVisible();
  });
});
