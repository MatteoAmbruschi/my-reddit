import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk('allData/loadPosts', async() => {
  const data = await fetch('https://www.reddit.com/r/italian.json')
  const json = await data.json()
  return json
})


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: [
        {
            title: 'charging...',
            text: "It's working!",
            id: 0
        },
        {
            title: 'charging....',
            text: 'Or not?!',
            id: 1
        },
        {
            title: 'charging.....',
            text: 'Wait a moment...',
            id: 2
        },
        {
            title: 'charging......',
            text: 'Nahh, refresh the page :(',
            id: 3
        }
      ],
      selectedPost: null,

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
      },
      extraReducers: (builder) => {
        builder.addCase(loadPosts.pending, (state) => {
          state.isLoadingPosts = true;
          state.hasError = false;
        }).addCase(loadPosts.rejected, (state) => {
          state.isLoadingPosts = false;
          state.hasError = true;
          state.allPosts = [{
            title: 'Error...',
            text: 'Try Again :(',
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

export const { postSingle, resetPostSingle } = postsSlice.actions;
export default postsSlice;