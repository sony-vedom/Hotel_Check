import {createSlice} from '@reduxjs/toolkit'


export const hotelsList = createSlice({
    name: 'SEARCH_RESULT',
    initialState: [],
    reducers: {
        setResult: (state, action) => {
            state.push({
                stars: action.payload.stars,
                price: Math.round(action.payload.price),
                hotelName: action.payload.hotelName,
                location: action.payload.location,
                date: action.payload.date,
                days: action.payload.days,
            })
        },
        deleteResult: (state) => {
            state.length = 0
        },
        updateList: (state, action) => {
            state.splice(action.payload, 1)
        }
    },
})

export const {setResult, deleteResult, updateList} = hotelsList.actions

export default hotelsList.reducer