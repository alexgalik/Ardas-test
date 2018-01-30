import * as initialState from '../todos.json';

export const fetchTodos = () => dispatch => { 
      dispatch({ type: 'FETCH_TODOS', payload: initialState })
  }