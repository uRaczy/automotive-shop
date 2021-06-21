import * as React from 'react';

import './cart.css';

const Cart: React.FC = () => {
  return(
    <div className='cart'>
      <img className='cart-icon' src="https://i.imgur.com/vE0YB8U.png" alt="cart" />
      <h4>Cart</h4>
    </div>
  );
}

export default Cart;