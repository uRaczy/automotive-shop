import * as React from 'react';

import Account from './account/account.component';
import Cart from './cart/cart.component';

const AccountCart: React.FC = () => {
  return (
    <div className='accountCart'>
      <Account/>
      <Cart/>
    </div>
  )
}

export default AccountCart;