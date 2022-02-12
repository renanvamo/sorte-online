import React, { useContext } from 'react';
import StoreContext from '../context/StoreContext';

export default function Products() {
  const { products } = useContext(StoreContext);
  console.log(products);
  return (
    <div>
      Todos os Produtos
    </div>
  );
}
