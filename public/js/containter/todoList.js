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
                <input type="checkbox" onClick={this.changeState.bind(this, index)}/>
                {todo.text}
                <button onClick={this.onDelete.bind(this, todo.id)}>X</button>
            </div>
        });
        return <div>
            {todo}
        </div>;
    }
});


function mapStateToProps(state) {
    return {todos: state.todos}
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