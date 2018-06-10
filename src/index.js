// Main Components
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {BrowserRouter as  Router, Route, Switch  } from 'react-router-dom';


// Custom Components
import './index.css';
import MainFrameRouter from './route/MainFrame/MainFrameRouter';
import {store} from './store/store'

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route exact path="/" component={ MainFrameRouter } />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
