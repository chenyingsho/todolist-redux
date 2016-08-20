export default function (state={todos:[]},action) {
    switch(action.type){
        case "ADD":
            return {
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        isDone:false
                    }
                ]
            };
    }
    return state;
}