import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './pages/Register'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
