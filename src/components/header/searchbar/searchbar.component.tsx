import React from 'react';

import './searchbar.css';

const Searchbar : React.FC= () => {
  return (
    // Forms in react are diffrent, info: https://reactjs.org/docs/forms.html
    <div className='searchBar'>
      <input className='searchField' type='search'></input>
      <input className='searchBtn' type='button'></input>
    </div>
  );
}

export default Searchbar;