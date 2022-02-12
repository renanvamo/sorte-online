import React, { useContext } from 'react';
import StoreContext from '../context/StoreContext';
import './styles/cartProduct.css';

export default function CartProducts() {
  const { shoppingCart } = useContext(StoreContext);

  return (
    <section className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        { shoppingCart.map((item) => (
          <tbody>
            <tr>
              <td>
                <div>
                  <img src={ item.image } alt={ `imagem do produto ${item.title}` }/>
                  <span>{ item.title }</span>
                </div>
              </td>
              <td>1</td>
              <td>{ item.price }</td>
            </tr>
          </tbody>
        )) }
      </table>
      <span className='total-price'>TOTAL $10.00</span>
    </section>
  );
}
