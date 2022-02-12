import React from 'react';
import StoreContext from './StoreContext';

function StoreProvider({ children }) {
  const args = {};

  return (
    <StoreContext.Provider value={ args }>
      { children }
    </StoreContext.Provider>
  );
}

export default StoreProvider;
