import React, {SyntheticEvent, useState} from 'react';

import './searchbar.css';

const Searchbar : React.FC = () => {
  const [ searchValue, setSearchValue ] = useState('');
  const handleChange = (e:any) => {
    setSearchValue(e.target.value);
  }

  return (
    // Forms in react are diffrent, info: https://reactjs.org/docs/forms.html
    <div className='searchBar'>
      <input className='searchField' type='search' value={searchValue} onChange={handleChange} placeholder="Search.."></input>
      <div className='searchBtn'>
        <span className="material-icons">
          search
        </span>
      </div>
    </div>
  );
}

export default Searchbar;