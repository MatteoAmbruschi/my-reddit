import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import postsSlice from '../features/post/postsSlice';
import slideBarSlice from '../features/sideBar/slideBarSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    slideBar: slideBarSlice.reducer
  },
});
