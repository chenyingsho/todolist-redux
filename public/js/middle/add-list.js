import request from 'superagent'
export default store=>next=>action=>{
    "use strict";
    if(action.type==='ADD'){
        request.post('/todo')
            .send({text:action.text})
            .end((err,res)=>{
                next({type:'GETTODOS',todolist:res.body})
            })
    }
    else{
        next(action);
    }
}