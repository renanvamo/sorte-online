import React, { useContext, useEffect, useState } from 'react';
import StoreContext from '../context/StoreContext';
import PropTypes from 'prop-types';
import serializePrice from './utils/serialize'
import './styles/card.css'

export default function Card(props) {
  const { id, image, title, description, price, priceDiscount } = props;
  const { shoppingCart, addToCart, removeFromCart } = useContext(StoreContext);
  const [onCart, setOnCart] = useState(false);

  useEffect(() => {
    const getProducts = () => {
      shoppingCart.forEach((item) => {
        if (item.id === id) {
          setOnCart(true);
        }
      });
    };
    getProducts();
  }, []);

  const handleClick = () => {
    const cart = {
      id,
      image,
      title,
      description,
      price: priceDiscount ? priceDiscount : price
    };
    setOnCart(!onCart);
    onCart ? removeFromCart(id) : addToCart(cart);
  }
  
  return (
    <div className='product-card'>
      <img className='card-image' src={ image } alt={ `imagem do produto ${title}` } />
      <span className='title'>{ title }</span>
      <p className='description' >{ description }</p>
      <section className='buttons-container'>
          { priceDiscount ? (
            <section className='prices-container'>
              <span className='current-price'>{ serializePrice(priceDiscount) }</span>
              <span className='old-price'>{ serializePrice(price) }</span>
            </section>
          ) : (
            <span className='current-price'>{ serializePrice(price) }</span>
          )}
      </section>
      <section className='cart-container'>
        <span 
          className={ onCart ? 'add-cart-btn': 'remove-cart-btn' }
          onClick={ handleClick }
        >
          { onCart ? 'remove from cart': 'add to cart +' }
        </span>
      </section>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  priceDiscount: PropTypes.number,
}.isRequired;
