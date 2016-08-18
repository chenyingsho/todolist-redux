let id = 0;
export default function reducer(state = {todos: [], filterName: "ALL"}, action) {
    switch (action.type) {
        case 'ADD':
            state.todos.push({id, text: action.text, isDone: false});
            id++;
            console.log(id);
            return state;
        case 'TOGGLE':
            let todo = state.todos.find(todo => todo.id === action.index);
            todo.isDone = !todo.isDone;
            return state;
        case 'FILTER':
            state.filterName = action.filterName;
            return state;
        case 'DELETE':
            let Todo = state.todos.find(todo => todo.id === action.index);
            state.todos.splice(state.todos.indexOf(Todo), 1);
            return state;
        default:
            return state;
    }
}