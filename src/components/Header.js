import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/header.css';

export default function Header() {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <header className='header'>
      <div className='nav-left'>
        <div className='nav-element' onClick={ () => navigateTo('/store') }>
          <span className='btn'>
            Home
          </span>
        </div>
        <div className='nav-element'>
          Logo
        </div>
      </div>
      <div className='nav-rigth'>
        <div className='nav-element' onClick={ () => navigateTo('/shopping-cart') }>
          <span className='btn'>
            Cart
          </span>
        </div>
      </div>
    </header>
  );
}
