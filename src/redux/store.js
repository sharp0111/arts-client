import { createStore, applyMiddleware} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import middleware from './middleware';
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/root.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

//const rootReducer = createRootReducer(history)(persistedReducer);

//with version 5.0
/*export default (initialState = {}, history) => {
    const middlewares = [
        thunk,
        middleware,
        routerMiddleware(history),
    ];

    const enhancers = composeWithDevTools(
        applyMiddleware(...middlewares)
    );

    const store = createStore(
        rootReducer,
        initialState,
        enhancers,
    );

    const persistor = persistStore(store);

    return{store, persistor}
}*/

export default (initialState = {}, history) => {
    const middlewares = [
      thunk,
      middleware,
      routerMiddleware(history),
    ];
  
    const enhancers = composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  
    const store = createStore(
      connectRouter(history)(persistedReducer),
      initialState,
      enhancers,
    );
  
    const persistor = persistStore(store);
  
    return {store, persistor}
  }