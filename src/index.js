import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import { fetchIssues, fetchOrganizations } from './store/api-action';
import { createAPI } from './services/api';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchIssues());
store.dispatch(fetchOrganizations());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(`root`),
);

// todo нет безопасности
