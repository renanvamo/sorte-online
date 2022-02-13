import React, { useContext } from 'react';
import StoreContext from '../context/StoreContext';
import './styles/cartProduct.css';
import serializePrice from './utils/serialize';

export default function CartProducts() {
  const { shoppingCart, totalPrice, removeFromCart } = useContext(StoreContext);

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
          <tbody key={ item.id }>
            <tr>
              <td>
                <div>
                  <img src={ item.image } alt={ `imagem do produto ${item.title}` }/>
                  <span>{ item.title }</span>
                </div>
              </td>
              <td>1</td>
              <td>
                { serializePrice(item.price) }
                <span
                  className='remove-item'
                  onClick={ () => removeFromCart(item.id) }
                >
                  X
                </span>
              </td>
            </tr>
          </tbody>
        )) }
      </table>
      <span className='total-price'>{ `Total Price: ${serializePrice(totalPrice)}` }</span>
    </section>
  );
}
