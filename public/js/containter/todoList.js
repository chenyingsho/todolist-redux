import React from 'react'
import {connect} from 'react-redux'

const TodoList = React.createClass({
    changeState(index){
        this.props.changeState(index);
    },
    onDelete(index){
        this.props.onDelete(index);
    },
    render: function () {
        const todo = this.props.todos.map((todo, index)=> {
            return <div key={index}>
                <input type="checkbox" checked={todo.isDone} onClick={this.changeState.bind(this, todo.id)}/>
                <span style={{"textDecoration": todo.isDone ? "line-through" : ""}}>{todo.text}</span>
                <button onClick={this.onDelete.bind(this, todo.id)}>X</button>
            </div>
        });
        return <div>
            {todo}
        </div>;
    }
});


function mapStateToProps(state) {
    if(state.filterName === 'ALL'){
        return {todos: state.todos}
    } else if(state.filterName === 'ACTIVE'){
        const todos = state.todos.filter(todo=>{
            return !todo.isDone
        })
        return {todos:todos}
    } else {
        const todos = state.todos.filter(todo=>{
            return todo.isDone
        })
        return {todos:todos}
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeState: (index)=> {
            dispatch({type: 'CHANGE', index})
        },
        onDelete: (index)=> {
            dispatch({type: 'DELETE', index})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);