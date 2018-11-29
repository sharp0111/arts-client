import { createStore, compose, applyMiddleware} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import middleware from './middleware';
import {createBrowserHistory} from 'history';
import createRootReducer from '../reducers/root.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, createRootReducer)

export default (initialState = {}, history) => {
    const middlewares = [
        thunk,
        middleware,
        routerMiddleware(history),
    ];

    const enhancers = composeWithDevTools(
        applyMiddleware(...middlewares)
    );

    const store = createStore(
        createRootReducer(history),
        initialState,
        enhancers,
    );

    const persistor = persistStore(store);

    return{store, persistor}
}