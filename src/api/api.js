import axios from "axios";



// const instance = axios.create({
//     withCredentials: true,
//     baseURL: "/hotels",
//     // headers: {
//     //     'Access-Control-Allow-Origin': '*',
//     //     'Content-Type': 'application/json',
//     //     "Access-Control-Allow-Methods": "GET"
//     // },
// })

const hotelsApi = {
    getHotels(locationName, dataCheckIn, dataCheckOut) {
        return axios.get(`https://engine.hotellook.com/api/v2/cache.json?location=${locationName}&currency=rub&checkIn=${dataCheckIn}&checkOut=${dataCheckOut}&limit=10`, )
    },
}


export default hotelsApi