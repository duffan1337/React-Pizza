import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import './scss/app.scss';
import App from './App';
import { Header } from './Components';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

