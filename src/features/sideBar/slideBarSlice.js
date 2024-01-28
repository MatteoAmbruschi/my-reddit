import { createSlice } from '@reduxjs/toolkit'

const slideBarSlice = createSlice({
    name: 'slideBar',
    initialState: {
        items: [{title: 'Calcio', id: 0}, {title: 'Macchine', id: 1}, {title: 'Londra', id: 2} , {title: 'Atalanta', id: 3}, {title: 'Fumetti', id: 4}],
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