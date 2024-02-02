import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk('allData/loadPosts', async (_, { getState }) => {
    const state = getState();
    const page = state.posts.keepInput ? state.posts.keepInput : 'popular';

    try {
      const response = await fetch(`https://www.reddit.com/r/${page}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load posts. HTTP error: ${response.status}`);
      }
      const json = await response.json();
      console.log(json)
      return json;
    } catch (error) {
      throw error;
    }
  }
);


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: [{
          title: "Charging...",
          selftext: 'Looking for it!',
          id: 0
      }],
      selectedPost: null,
      keepInput: 'popular',

      isLoadingPosts: false,
      hasError: false
    },
      reducers: {
        postSingle: (state, action) => {
            const postId = action.payload;
            state.selectedPost = state.allPosts.find(post => post.id === postId) || null;
          },
          resetPostSingle: (state) => {
            state.selectedPost = null;
          },
          searchInput: (state, action) =>{
            state.keepInput = action.payload
          }
      },
      extraReducers: (builder) => {
        builder.addCase(loadPosts.pending, (state) => {
          state.isLoadingPosts = true;
          state.hasError = false;
        }).addCase(loadPosts.rejected, (state) => {
          state.isLoadingPosts = false;
          state.hasError = true;
          state.allPosts = [{
            title: "The page doesn't exist",
            selftext: 'Try Again :(',
            id: 0
        }]
        }).addCase(loadPosts.fulfilled, (state, action) => {
          state.isLoadingPosts = false;
          state.allPosts = action.payload;
          try{
            state.allPosts = action.payload.data.children.map((child) => child.data);
          }catch(e){
            console.log(e)
          }
        })
      }
})

export const { postSingle, resetPostSingle, searchInput } = postsSlice.actions;
export default postsSlice;