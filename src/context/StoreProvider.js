import React, { useEffect, useState } from 'react';
import StoreContext from './StoreContext';

function StoreProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (cart) => setShoppingCart([ ...shoppingCart, cart ]);

  const removeFromCart = (id) => setShoppingCart(shoppingCart.filter((item) => item.id !== id ));

  const sumCartValue = () => setTotalPrice(shoppingCart.reduce((acc, { price }) => acc + price, 0));
  useEffect(sumCartValue, [shoppingCart]);

  const args = {
    shoppingCart,
    setShoppingCart,
    addToCart,
    removeFromCart,
    totalPrice
  };

  return (
    <StoreContext.Provider value={ args }>
      { children }
    </StoreContext.Provider>
  );
}

export default StoreProvider;
