import {createSlice} from '@reduxjs/toolkit'
import pic1 from "../../assets/image/carousel/house1.png"
import pic2 from "../../assets/image/carousel/forest2.png"
import pic3 from "../../assets/image/carousel/forestRoad3.png"
import pic4 from "../../assets/image/carousel/forestRoad4.png"

export const carousel = createSlice({
    name: 'carousel',
    initialState: {images: [pic1, pic2, pic3, pic4]},
    reducers: {},
})

export default carousel.reducer