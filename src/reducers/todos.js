
export default function todos (state = [], action = {}){
    if (action.type === 'FETCH_TODOS')
        return action.payload       
      else 
      return state
}