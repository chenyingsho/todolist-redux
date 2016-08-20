import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducers/app-reducer'
import  Todo from './containter/add'
import {Provider} from 'react-redux'
import TodoList from './containter/todoList'

let store = createStore(reducer);

const App = React.createClass({
    render: function () {
        return <div>
            <Todo />
            <TodoList />
        </div>;
    }
});

ReactDOM.render(
    <Provider  store={store}>
        <App/>
    </Provider>, document.getElementById('root'));