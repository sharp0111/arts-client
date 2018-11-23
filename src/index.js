import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './redux/store';
import {Provider} from 'react-redux';
import './styles/custom.scss';
import App from './containers/App/App';
import configureStore from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';

const initialState = {};
const {store, persistor} = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
