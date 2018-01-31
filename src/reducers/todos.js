
export default function todos (state = [], action = {}){
    console.log(action)
    if (action.type === 'FETCH_TODOS')
        return action.todos
      else 
      return state
}