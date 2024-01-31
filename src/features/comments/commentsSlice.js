import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

  export const loadComments = createAsyncThunk('comments/loadComments', async({ subreddit, postId }) => {
    try{
        const data = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`);
        const json = await data.json()
        return json
    } catch (error){
        throw error
    }
  })

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        commentsList: [],
        isLoadingComments: false,
        hasError: false
    },
    reducers: {
        cleanerComments: (state) =>{
            state.commentsList = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadComments.pending, (state) => {
            state.isLoadingComments = true;
            state.hasError = false;
            state.commentsList = [{author: 'Charging...', body: 'Wait a moment...'}]
        }).addCase(loadComments.rejected, (state) => {
            state.isLoadingComments = false;
            state.hasError = true;
            state.commentsList = [{author: 'Error!', body: 'No data'}]
        }).addCase(loadComments.fulfilled, (state, action) => {
            state.isLoadingComments = false;
            state.hasError = false;
            try{
                state.commentsList = action.payload[1].data.children.map((child) => child.data);
            } catch(e){
                state.commentsList = [{author: 'Error!', body: 'No data'}]
            }
        })
    }
})

export default commentsSlice
export const { cleanerComments } = commentsSlice.actions