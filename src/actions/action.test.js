import * as actions from './action'

describe('actions', () => {
    it('should create an action to add a todo', () => {
      const todos = 'Finish docs'
      const expectedAction = {
        type: "FETCH_TODOS",
        todos
      }
      expect(actions.setTodos(todos)).toEqual(expectedAction)
    })
  })