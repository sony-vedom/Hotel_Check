import {all} from 'redux-saga/effects'
import {watcherAddingFavorite} from "./addingFavorites";
import {watcherFetchCards} from "./fetchCards";





export default function* rootSaga() {
    yield all([
        watcherAddingFavorite(),
        watcherFetchCards()
    ])
}