import * as initialState from '../todos.json';

export const setTodos = (todos) => {
  return {
    type: "FETCH_TODOS",
    todos
  }
}
export const fetchTodos = () => dispatch => { 
   const test = dispatch(setTodos(initialState))
   console.log(test);
   return  test
  }