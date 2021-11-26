/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { articlesSlice } from './reducers/articlesReducer';

export const store = configureStore({
  reducer: {
    articles: articlesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const articlesState = (state: RootState) => state.articles;
