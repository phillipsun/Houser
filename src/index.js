import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './ducks/store';
import './index.css';
import './styles/resets.css'
import App from './App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>  
  </Provider>
  , document.getElementById('root')
);
unregister();
