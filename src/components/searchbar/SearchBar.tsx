import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Divider, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  useAppDispatch,
  useAppSelector,
  useFetchArticles,
} from '../../store/hooks';
import { articlesState } from '../../store/store';

import './searchBar.scss';
import { setQuery } from '../../store/reducers/articlesReducer';

const SearchBar: FC = () => {
  const { query } = useAppSelector(articlesState);
  const [value, setValue] = useState(query);
  const dispatch = useAppDispatch();
  const fetchArticles = useFetchArticles();

  useEffect(() => {
    fetchArticles(query);
  }, [query]);

  const handelInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handelInputSubmit = async (
    e: React.KeyboardEvent<HTMLDivElement>
  ): Promise<void> => {
    if (e.key === 'Enter') {
      dispatch(setQuery(value));
    }
  };

  return (
    <>
      <div className="searchbar-title">
        Filter by keywords:
        <TextField
          value={value}
          type="text"
          onChange={handelInputChange}
          onKeyDown={handelInputSubmit}
          fullWidth
          sx={{
            mt: '10px',
            color: '#575757',
            border: '1px solid #EAEAEA',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
            borderRadius: '5px',
            fontSize: '1.6rem',
          }}
          id="outlined-basic"
          InputProps={{
            style: { fontSize: '16px' },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ width: 20, height: 20 }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </div>
      <div className="results">Results:</div>
      <Divider />
    </>
  );
};
export default SearchBar;
