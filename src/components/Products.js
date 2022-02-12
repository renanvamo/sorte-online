import React, { useEffect, useState } from 'react';
import productsJson from '../database/productList';
import './styles/products.css'
import Card from './Card';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProdutcs = () => {
      setProducts(productsJson);
    };
    getProdutcs();
  }, []);

  return (
    <div className="store-cards-container">
      {
        products
          ? products.map((product) => (
            <Card
              key={ product.id }
              image={ product.image }
              title={ product.title }
              description={ product.description }
              price={ product.price }
              priceDiscount={ product.priceDiscount }
            />  
          )) : 'Carregando produtos...'
      }
    </div>
  );
}
