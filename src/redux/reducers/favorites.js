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
        sortByRatingFavoritesGlobal: (state, action) => {
            state = (action.payload === "up")
               ? state.sort((a, b) => Number(a.stars) - Number(b.stars))
               : state.sort((a, b) => Number(b.stars) - Number(a.stars))
        },
        sortByPriceFavoritesGlobal: (state, action) => {
            state = (action.payload === "up")
                ? state.sort((a, b) => Number(a.price) - Number(b.price))
                : state.sort((a, b) => Number(b.price) - Number(a.price))
        },
        deleteFavoritesGlobal: (state, action) => {
            state.splice(action.payload, 1)
        }
    },
})

export const {setFavoritesGlobal, sortByRatingFavoritesGlobal, sortByPriceFavoritesGlobal, deleteFavoritesGlobal} = favorites.actions

export default favorites.reducer