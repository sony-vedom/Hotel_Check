import {createSlice} from '@reduxjs/toolkit'


export const favorites = createSlice({
    name: 'FAVORITES',
    initialState: [],
    reducers: {
        setFavoritesGlobal: (state, action) => {
            state.push({
                stars: action.payload.stars,
                price: action.payload.price,
                hotelName: action.payload.hotelName,
                date: action.payload.date,
                days: action.payload.days,
            })
        },
    },
})

export const {setFavoritesGlobal} = favorites.actions

export default favorites.reducer