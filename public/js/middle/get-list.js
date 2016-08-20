import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'GETLIST') {
        request.get('/todos')
            .end((err, res)=> {
                next({type: 'GETTODOS', todolist: res.body})
            })
    }
    else {
        next(action);
    }
}