import React, { useState } from 'react';
import StoreContext from './StoreContext';

function StoreProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (cart) => setShoppingCart([ ...shoppingCart, cart ]);

  const removeFromCart = (id) => setShoppingCart(shoppingCart.filter((item) => item.id !== id ));

  const args = {
    shoppingCart,
    setShoppingCart,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={ args }>
      { children }
    </StoreContext.Provider>
  );
}

export default StoreProvider;
