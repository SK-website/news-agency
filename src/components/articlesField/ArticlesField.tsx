/* eslint-disable no-underscore-dangle */
import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppSelector, useFetchArticles } from '../../store/hooks';
import { articlesState } from '../../store/store';
import { Article } from '../../store/reducers/articlesReducer';
import './articlesField.scss';
import ArtCard from '../artCard/ArtCard';

export interface SortedArticle {
  _id: string;
  score: number;
  author: string;
  authors: string[];
  clean_url: string;
  country: string;
  is_opinion: boolean;
  language: string;
  link: string;
  media: string;
  published_date: string;
  published_date_precision: string;
  rank: number;
  rights: string;
  summary: string;
  title: string;
  topic: string;
  twitter_account: string | null;
  _scrore: 5.401865;
  breif: string;
  breifTitle: string;
  foundInTitle: number;
  foundInSummary: number;
}

const ArticlesField: FC = () => {
  const { query, error, articles, isLoading, notFound } =
    useAppSelector(articlesState);
  const fetchArticles = useFetchArticles();

  const sortArticles = (arr: Article[], keyWords: string) => {
    const queryArr = keyWords.toLowerCase().split(' ');
    const sortedArr: SortedArticle[] = JSON.parse(JSON.stringify(arr));
    sortedArr.forEach((el) => {
      for (let i = 0; i < queryArr.length; i += 1) {
        const summaryToLC = el.summary.toLowerCase().split(' ');
        const breifTitleToLC = el.breifTitle.toLowerCase().split(' ');
        const amountTitle = breifTitleToLC.filter((v) => v === queryArr[i]);
        const amountSum = summaryToLC.filter((v) => v === queryArr[i]);
        el.foundInTitle = (el.foundInTitle || 0) + Number(amountTitle.length);
        el.foundInSummary = (el.foundInSummary || 0) + Number(amountSum.length);
      }
    });
    sortedArr
      .sort((prev, next) => next.foundInSummary - prev.foundInSummary)
      .sort((prev, next) => next.foundInTitle - prev.foundInTitle);
    return sortedArr;
  };

  useEffect(() => {
    fetchArticles(query);
  }, [query]);

  if (isLoading) return null;
  if (error) return <p>{error}</p>;
  if (notFound)
    return (
      <div className="no-results">
        Sorry...No articles matching your search were found.
      </div>
    );

  return (
    <>
      {articles?.length && (
        <Grid container spacing={2} sx={{ maxWidth: 1290, mt: '45px' }}>
          {sortArticles(articles, query).map((el) => {
            return (
              <ArtCard
                key={el._id}
                id={el._id}
                date={el.published_date}
                breifTitle={el.breifTitle}
                media={el.media}
                breif={el.breif}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default ArticlesField;
