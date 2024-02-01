import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/post/postsSlice';
import slideBarSlice from '../features/sideBar/slideBarSlice';
import commentsSlice from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    slideBar: slideBarSlice.reducer,
    comments: commentsSlice.reducer
  },
});
