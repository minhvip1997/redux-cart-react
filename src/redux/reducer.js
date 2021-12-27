

const initState = {
    filters:{
        search: '',
        status: 'All',
        priority: []
    },
    todoList:[
        {id: 1, name: 'learn yoga', completed: false, priority: 'Medium'},
        {id: 2, name: 'learn redux', completed: true, priority: 'High'},
        {id: 3, name: 'learn javascript', completed: false, priority: 'Low'}
    ]
}

const rootReducer = (state = initState,action)=>{
    switch (action.type) {
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          return state - 1
        default:
          return state
      }
}


export default rootReducer;