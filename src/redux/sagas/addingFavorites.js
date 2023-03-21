import {fork, put, take} from 'redux-saga/effects'
import {setFavoritesGlobal} from "../reducers/favorites";
import {updateList} from "../reducers/hotelsList";


export function* putUpdateList(payload) {
    yield put (updateList(payload.i))
}

export function* watcherAddingFavorite() {
    while (true) {
        const action = yield take(setFavoritesGlobal().type)
        yield fork(putUpdateList, action.payload)
    }
}


