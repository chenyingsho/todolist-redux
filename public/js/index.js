import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './createRedux';

const store = createStore(reducer);

class Todolist extends Component {
    render() {
        return <div>
            <h1>todos</h1>
            <input type="text"/>
            <Todos todos={store.getState().todos}/>
        </div>
    }
}

class Todos extends React.Component {
    render() {
        return <div>
            {this.props.todos.map(todo => {
                return <div>
                    {todo.text}
                </div>
            })}
        </div>
    }
}


ReactDOM.render(<Todolist/>, document.getElementById('root'));