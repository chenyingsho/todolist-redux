let id = 0;
export default function (state = {todos: [], filterName: 'ALL'}, action) {
    switch (action.type) {
        // case "ADD":
        //     return {
        //         todos: [
        //             ...state.todos,
        //             {
        //                 text: action.text,
        //                 isDone: false,
        //                 id: ++id
        //             }
        //         ]
        //     };
        //
        // case 'CHANGE':
        //     state.todos[action.index].isDone = !state.todos[action.index].isDone;
        //     return {
        //         todos: [
        //             ...state.todos
        //         ]
        //     };
        // case 'DELETE':
        //     let index = state.todos.indexOf(state.todos.find(t=>t.id===action.index));
        //     state.todos.splice(index,1);
        //     return{
        //         todos:[
        //             ...state.todos
        //         ]
        //     };
        case 'GETTODOS':
            return {
                todos: action.todolist,
                filterName: state.filterName
            }
        case 'SHOW':
            return {
                todos: [
                    ...state.todos
                ],
                filterName: action.filterName
            }

    }
    return state;
}