import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import ArtCard from '../card/Card';
import getData from '../../services/api';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { articlesState } from '../../store/store';
import {
  Article,
  fetchArticlesStart,
  fetchArticlesError,
  fetchArticlesSuccess,
} from '../../store/reducers/articlesReducer';

const ArticlesField: FC = () => {
  const { query, error, articles } = useAppSelector(articlesState);
  const dispatch = useAppDispatch();

  const fetchArticles = async (keyStr: string) => {
    try {
      dispatch(fetchArticlesStart);
      const response = await getData(keyStr);
      const art = response as Article[];
      const articlesFromResponse = art.map((el) => {
        el.breif = `${el.summary.substr(0, 96)}...`;
        return el;
      });
      setTimeout(
        () => dispatch(fetchArticlesSuccess(articlesFromResponse)),
        500
      );
    } catch (er) {
      console.log(er);
      dispatch(fetchArticlesError('ERROR on loading'));
    }
  };

  useEffect(() => {
    fetchArticles(query);
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {articles && (
        <Grid container sx={{ maxWidth: '1290px', mt: '45px' }}>
          {articles.map((el) => {
            return (
              <ArtCard
                // eslint-disable-next-line no-underscore-dangle
                key={el._id}
                date={el.published_date}
                title={el.title}
                media={el.media}
                link={el.link}
                summary={el.summary}
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
