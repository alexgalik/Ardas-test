import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import todoPage from './todoPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Router>
        <Provider store = {store}>
            <div>
                <Route exact path = "/" component = {App} /> 
                <Route path = "/todos/:id" component = {todoPage} /> 
            </div>
        </Provider>
    </Router> , 
document.getElementById('root'));
registerServiceWorker();
