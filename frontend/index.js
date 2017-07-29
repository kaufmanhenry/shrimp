import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './containers/App';

import rootReducer from './reducers';
import IndexSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const configureStore = () => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const store = configureStore();

sagaMiddleware.run(IndexSagas);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
