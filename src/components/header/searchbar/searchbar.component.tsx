import React, {useState} from 'react';

import './searchbar.css';

const Searchbar : React.FC = () => {
  const [ searchValue, setSearchValue ] = useState('');

  return (
    // Forms in react are diffrent, info: https://reactjs.org/docs/forms.html
    <div className='searchBar'>
      <input className='searchField' type='search' placeholder="Search.."></input>
      <div className='searchBtn'>
        <span className="material-icons">
          search
        </span>
      </div>
    </div>
  );
}

export default Searchbar;