import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Browser as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route
        exact
        path='/'
        component={App}
      />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
