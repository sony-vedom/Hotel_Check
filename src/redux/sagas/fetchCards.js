import {put, select, takeEvery, call} from 'redux-saga/effects'
import hotelsApi from "../../api/api";
import {setSearchData} from "../reducers/search";
import {setResult} from "../reducers/hotelsList";

export function* fetchCards() {
    const state = yield select(state => state.search)
    const promise = yield call(hotelsApi.getHotels, state.location, state.checkInDate, state.checkoutDate)
    const hotels = yield promise.data
    for (let hotel of hotels) {
        yield put(setResult({
            stars: hotel.stars,
            price: hotel.priceAvg,
            hotelName: hotel.hotelName,
            location: state.location,
            date: state.checkInDate,
            days: state.days,
        }))
    }
}

export function* watcherFetchCards() {
    yield takeEvery(setSearchData().type, fetchCards)
}


