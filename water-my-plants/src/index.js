import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
    rootReducer, applyMiddleware(thunk)
    );

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );