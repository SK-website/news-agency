import React, { FC } from 'react';
import { Divider, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.scss';
// import React, { ChangeEvent, FC, useState } from 'react';

const SearchBar: FC = () => {
  // const [searchWords, setSearchWords] = useState('');

  // const handelInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setSearchWords(e.target.value);
  // };

  // const handelInputSubmit = (e: ChangeEvent<HTMLFormElement>) =>
  //   console.log(e.target.value);
  return (
    <>
      <div className="searchbar-title">Filter by keywords:</div>
      <TextField
        id="outlined-basic"
        // label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size="medium"
        className="searchbar"
        sx={{ width: 600 }}
      >
        <SearchIcon />;
      </TextField>
      <div className="results">Results:</div>
      <Divider sx={{ maxWidth: '1290px' }} />
    </>
    // <form className="search-gr" onSubmit={handelInputSubmit}>
    //   <label htmlFor="search" className="search">
    //     Filter by keywords
    //     <input
    //       id="search"
    //       type="text"
    //       className="searchbar"
    //       value={searchWords}
    //       onChange={handelInputChange}
    //     />
    //     <button className="search-btn" type="submit" disabled={state.isLoading}>
    //       {/* {state.isLoading ? 'Searching for news...' : 'Search'} */}
    //     </button>
    //   </label>
    // </form>
  );
};
export default SearchBar;
