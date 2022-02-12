import React from 'react';
import './styles/card.css'

export default function Card(props) {
  const { image, title, description, price, priceDiscount } = props;
  return (
    <div className='product-card'>
      <img className='card-image' src={ image } alt={ `imagem do produto ${title}` } />
      <span className='title'>{ title }</span>
      <p className='description' >{ description }</p>
      <section className='buttons-container'>
        <section className='prices-container'>
          <span className='price'>{ price }</span>
          <span className='price-discount'>{ priceDiscount }</span>
        </section>
        <section className='cart-container'>
          <span className='add-to-cart'>Add to Cart</span>
        </section>
      </section>
    </div>
  );
}
