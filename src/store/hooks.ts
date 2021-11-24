import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import {
  Article,
  fetchArticlesError,
  fetchArticlesStart,
  fetchArticlesSuccess,
} from './reducers/articlesReducer';
import getData from '../services/api';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetchArticles = () => {
  const dispatch = useAppDispatch();
  return async (keyStr: string): Promise<void> => {
    try {
      dispatch(fetchArticlesStart);
      const response = await getData(keyStr);
      const art = response as Article[];
      const articlesFromResponse = art?.map((el) => {
        el.breif = `${el.summary.substr(0, 99)}...`;
        el.breifTitle =
          el.title.length <= 45
            ? (el.breifTitle = el.title)
            : `${el.title.substr(0, 44)}...`;
        return el;
      });
      setTimeout(
        () => dispatch(fetchArticlesSuccess(articlesFromResponse)),
        100
      );
    } catch (er) {
      dispatch(fetchArticlesError('ERROR on loading'));
    }
  };
};
