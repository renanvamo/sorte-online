import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/store" element={ <Store /> } />
        <Route exact path="/shopping-cart" element={ <ShoppingCart /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
