import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArticlesState {
  query: string;
  articles: Article[];
  isLoading: boolean;
  error: null | string;
  notFound: boolean;
}

export interface Article {
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
}

const initialState: ArticlesState = {
  query: 'Christmas',
  articles: [],
  isLoading: false,
  error: null,
  notFound: false,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    fetchArticlesStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.notFound = false;
    },
    fetchArticlesSuccess: (state, action: PayloadAction<Array<Article>>) => {
      state.articles = action.payload;
      state.isLoading = false;
    },
    fetchArticlesError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setNotFoundStatus: (state, action: PayloadAction<boolean>) => {
      state.notFound = action.payload;
    },
  },
});

export const {
  fetchArticlesStart,
  fetchArticlesSuccess,
  fetchArticlesError,
  setQuery,
  setNotFoundStatus,
} = articlesSlice.actions;

export default articlesSlice.reducer;
