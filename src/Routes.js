import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Store, ShoppingCart, NotFound } from './pages';

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
