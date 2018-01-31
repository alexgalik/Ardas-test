import reducer from './todos'

describe('todos reducer', () => {
    it ('should handle ADD_TODO', () => {
        expect(
          reducer([], {
            type: "FETCH_TODOS",
            todos: [{"id": 1, "name": "Todo1"}, {"id": 2, "name": "Todo2"}]
          })
        ).toEqual([
            {
                "id": 1,
                "name": "Todo1"
            },
            {
                "id": 2,
                "name": "Todo2"
            }
        ])           
      })
})