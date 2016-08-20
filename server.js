"use strict";

const express = require('express');

const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('./views'));

app.use(express.static('./public'));
app.use(express.static('./dist'));

const todos = [];
let id = 0;
app.get('/todos',(req,res)=>{
    res.json(todos);
})

app.post('/todo',(req,res)=>{
    todos.push({id:id++,text:req.body.text,isDone:false});
    res.json(todos);
});

app.delete('/todo', (req,res) => {
    const id = todos.indexOf(todos.find(t => t.id === req.body.id));
    todos.splice(id, 1);

    res.json(todos);
})
app.put('/todo',(req,res)=>{

    const id=todos.indexOf(todos.find(t =>t.id===req.body.id));
    todos[id].isDone=!todos[id].isDone;
    res.json(todos);
})
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('listening at port %s', port);
});

