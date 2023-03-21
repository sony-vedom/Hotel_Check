import {createSlice} from '@reduxjs/toolkit'


export const favoritesSort = createSlice({
    name: 'FAVORITES_SORT',
    initialState: {
        button: "",
        select: "",
    },
    reducers: {
        setSort: (state, action) => {
            debugger
            state.button = action.payload.button
            state.select = action.payload.select
        },
    },
})

export const {setSort} = favoritesSort.actions

export default favoritesSort.reducer