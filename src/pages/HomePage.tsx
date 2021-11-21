import React, { FC } from 'react';
import ArticlesField from '../components/articlesField/ArticlesField';
import SearchBar from '../components/searchbar/SearchBar';

const HomePage: FC = () => (
  <div className="container">
    <SearchBar />
    <ArticlesField />
  </div>
);

export default HomePage;
