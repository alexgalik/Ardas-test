import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedApp, {App} from './App';
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
const props = {
      fetchTodos: jest.fn(),
      todos: []
    }
it('renders without crashing', () => {
  const mainPage = mount(<App {...props}/>);
  expect(mainPage.find('table').length).toEqual(1)
});

