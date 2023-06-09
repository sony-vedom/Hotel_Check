import {configureStore} from '@reduxjs/toolkit'
import carousel from "./reducers/carousel";
import search from "./reducers/search";
import createSagaMiddleware from 'redux-saga'
import searchResult from "./reducers/hotelsList";
import favorites from "./reducers/favorites"
import rootSaga from "./sagas/rootSaga";
import favoritesSort from "./reducers/favoritesSort";


const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer: {
        carousel,
        search,
        searchResult,
        favorites,
        favoritesSort,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store;
