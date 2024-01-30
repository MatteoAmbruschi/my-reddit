import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const loadPosts = createAsyncThunk('search', async(post, thunkAPI) => {
    /*   const data = await fetchPosts(post)
      const json = await data.json()
      return json */
    })
    

const slideBarSlice = createSlice({
    name: 'slideBar',
    initialState: {
        items: [{title: 'Calcio', id: 0}, {title: 'Macchine', id: 1}, {title: 'Londra', id: 2} , {title: 'Atalanta', id: 3}, {title: 'Fumetti', id: 4}, {title: 'Telefoni', id: 5}],
        itemClicked: null
    },
    reducers: {
        filterClicked: (state, action) => {
            const clickedId = action.payload
            state.itemClicked = state.items.find(click => click.id === clickedId) || null
        },
        cleaner: (state) => {
            state.itemClicked = null
        }
    }
})

export const { filterClicked, cleaner } = slideBarSlice.actions
export default slideBarSlice