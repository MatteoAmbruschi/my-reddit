import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: [
        {
            title: 'prova 1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.',
            id: 0
        },
        {
            title: 'prova 2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.',
            id: 1
        },
        {
            title: 'prova 3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.',
            id: 2
        },
        {
            title: 'prova 4',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.',
            id: 3
        }
      ],
      selectedPost: null
    },
      reducers: {
        postSingle: (state, action) => {
            const postId = action.payload;
            state.selectedPost = state.allPosts.find(post => post.id === postId) || null;
          },
          resetPostSingle: (state) => {
            state.selectedPost = null;
          },
      }
})

export const { postSingle, resetPostSingle } = postsSlice.actions;
export default postsSlice;