import { createSlice } from '@reduxjs/toolkit'


const slideBarSlice = createSlice({
    name: 'slideBar',
    initialState: {
        items: [{title: 'popular', id: 0}, {title: 'funny', id: 1}, {title: 'AskReddit', id: 2} , {title: 'gaming', id: 3}, {title: 'aww', id: 4}, {title: 'movies', id: 5}],
        itemClicked: null
    },
    reducers: {
        filterClicked: (state, action) => {
            const clickedId = action.payload
            state.itemClicked = state.items.find(click => click.id === clickedId) || null
        },
        cleanerItem: (state) => {
            state.itemClicked = null
        }
    }
})

export const { filterClicked, cleanerItem } = slideBarSlice.actions
export default slideBarSlice