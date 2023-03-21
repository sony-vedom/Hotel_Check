import {createSlice} from '@reduxjs/toolkit'
import {addDays} from "date-fns";


export const search = createSlice({
    name: 'SEARCH',
    initialState: {
        location: "",
        checkInDate: "",
        days: "",
        checkoutDate: ""
    },
    reducers: {
        setSearchData: (state, action) => {
            state.location = action.payload.location
            state.checkInDate = action.payload.checkInDate
            state.days = action.payload.days
            state.checkoutDate = addDays(new Date(state.checkInDate), Number(state.days)).toISOString().slice(0, 10)
        }
    },
})

export const { setSearchData } = search.actions

export default search.reducer

