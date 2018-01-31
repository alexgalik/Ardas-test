
export default function todos (state = [], action = {}){
    if (action.type === 'FETCH_TODOS')
        return action.todos
      else 
      return state
}