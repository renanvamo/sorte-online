import React, { useContext, useEffect, useState } from 'react';
import StoreContext from '../context/StoreContext';
import PropTypes from 'prop-types';
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
    const cart = { id, image, title, description, price, priceDiscount };
    setOnCart(!onCart);
    onCart ? removeFromCart(id) : addToCart(cart);
  }
  
  return (
    <div className='product-card'>
      <img className='card-image' src={ image } alt={ `imagem do produto ${title}` } />
      <span className='title'>{ title }</span>
      <p className='description' >{ description }</p>
      <section className='buttons-container'>
        <section className='prices-container'>
          { priceDiscount ? (
            <div>
              <span className='price-discount'>{ priceDiscount }</span>
              <span className='price'>{ price }</span>
            </div>
          ) : (
            <span className='price'>{ price }</span>
          )}
          </section>
        <section className='cart-container'>
          <span className='add-to-cart' onClick={ handleClick }>
            { onCart ? 'in the cart': 'add to cart' }
          </span>
        </section>
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
