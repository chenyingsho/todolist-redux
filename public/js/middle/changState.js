import request from 'superagent';

export default store => next => action => {

    if(action.type === 'CHANGE'){
        request.put('/todo')
            .send({id: action.index})
            .end((err, res) => {
                next({type: 'GETTODOS', todolist: res.body});
            })
    }
    else {
        next(action);
    }
}