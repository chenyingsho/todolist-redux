import requst from 'superagent';

export default store=>next=>action=>{
    if(action.type==='DELETE'){
        requst.del('/todo')
            .send({id:action.index})
            .end((err,res) => {
                "use strict";
                next({type: 'GETTODOS', todolist: res.body});
            })
    }  else {
        next(action);
    }
}