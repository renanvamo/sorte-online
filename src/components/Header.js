import React from 'react';
import './styles/header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='nav-left'>
        <div className='nav-element'>
          Home
        </div>
        <div className='nav-element'>
          Logo
        </div>
      </div>
      <div className='nav-rigth'>
        <div className='nav-element'>
          Cart
        </div>
      </div>
    </header>
  );
}
