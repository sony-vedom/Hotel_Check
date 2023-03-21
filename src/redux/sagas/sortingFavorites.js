import {select, takeEvery, put} from 'redux-saga/effects'
import {sortByPriceFavoritesGlobal, sortByRatingFavoritesGlobal} from "../reducers/favorites";
import {setSort} from "../reducers/favoritesSort";


export function* sortingFavorites() {
    const sortState = yield select(state => state.favoritesSort)
debugger
    switch (sortState.button) {
        case "rating": {
            yield put(sortByRatingFavoritesGlobal(sortState.select))
            break
        }
        case "price": {
            yield put(sortByPriceFavoritesGlobal(sortState.select))
            break
        }
        default: {
            break
        }
    }
}

export function* watcherSortingFavorite() {
    while (true) {
        yield takeEvery(setSort().type, sortingFavorites)
    }
}


