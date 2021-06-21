import * as React from 'react';

import './account.css';

const Account: React.FC = () => {
  return(
    <div className='account'>
      <img className='account-icon' src="https://i.imgur.com/fcu9yH5.png" alt="account" />
      <h4>Account</h4>
    </div>
  );
}

export default Account;