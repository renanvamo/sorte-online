import React from 'react';
import StoreContext from './StoreContext';
import productsJson from '../database/productList.json';

function StoreProvider({ children }) {
  const products = JSON.stringify(productsJson);

  const args = {
    products
  };

  return (
    <StoreContext.Provider value={ args }>
      { children }
    </StoreContext.Provider>
  );
}

export default StoreProvider;
