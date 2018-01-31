import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedTodo, {Todo} from './todoPage';

  configure({ adapter: new Adapter() });

  const props = {
    todo: {
        id: "1",
        newName: "Todo1",
        editing: false
    },
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    editName: jest.fn(),
    fetchTodos: jest.fn(),
}
  it('renders without crashing', () => {
    const mainPage = mount(<Todo {...props}/>);
    expect(mainPage.find('div').length).toEqual(2)
    mainPage.find('.click').simulate('click')
    expect(mainPage.find('input').length).toEqual(1)
    // Не работает по принчини отсутвия сервера куда посылается запрос
    // mainPage.find('form').simulate('submit')
    // expect(mainPage.find('.name').length).toEqual(1)
  });