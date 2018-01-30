import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);
it('renders without crashing', () => {
  const mainPage = shallow(<Provider store={store}><App/></Provider>);
});
