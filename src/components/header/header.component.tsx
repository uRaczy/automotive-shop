import React from "react";

import './header.css';

import Searchbar from './searchbar/searchbar.component';
import AccountCart from "./account-cart/account-cart.component";

export const Header : React.FC = () => {
  return(
    <header className='Header'>
      <img className='logo-img' src="https://i.imgur.com/aHtbpYB.png" alt="logo" />
      <Searchbar />
      <AccountCart />
    </header>
  );
}