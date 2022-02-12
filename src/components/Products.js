import React, { useEffect, useState } from 'react';
import productsJson from '../database/productList.json';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProdutcs = () => {
      setProducts(JSON.stringify(productsJson));
    };
    getProdutcs();
  });

  return (
    <div>
      {
        products 
          ? products.map((product, index) => (
            <Card
              key={ index }
              id={ product.id }
              image={ product.image }
              description={ product.description }
              price={ product.price }
              priceDiscount={ product.priceDiscount }
            />  
          )) : 'Carregando produtos...'
      }
    </div>
  );
}
