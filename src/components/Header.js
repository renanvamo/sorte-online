import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StoreContext from '../context/StoreContext';
import './styles/header.css';

export default function Header() {
  const { shoppingCart } = useContext(StoreContext);
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <header className='header'>
      <div className='nav-left'>
        <div className='nav-element' onClick={ () => navigateTo('/store') }>
          <span className='btn'>
            DS
          </span>
        </div>
        <div className='nav-element'>
          Dev Store
        </div>
      </div>
      <div className='nav-rigth'>
        <div className='btn-cart' onClick={ () => navigateTo('/shopping-cart') }>
          <img
            src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/30/ffffff/external-shopping-cart-interface-kiranshastry-solid-kiranshastry-1.png"
            alt="Shopping cart item" />
          <span>
            { shoppingCart.length }
          </span>
        </div>
      </div>
    </header>
  );
}
