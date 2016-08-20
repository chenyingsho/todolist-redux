import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/app-reducer'
import  Todo from './containter/add'
import {Provider} from 'react-redux'
import TodoList from './containter/todoList'
import getlist from './middle/get-list'
import addlist from './middle/add-list'
import deletelist from './middle/delete-list';
import changelist from './middle/changState'
import Footer from './containter/fotter'

const createStoreWithMiddleware = applyMiddleware(getlist, addlist,deletelist,changelist)(createStore);
const store = createStoreWithMiddleware(reducer);

const App = React.createClass({
    componentWillMount(){
        store.dispatch({type: 'GETLIST'})
    },
    render: function () {
        return <div>
            <Todo />
            <TodoList />
            <Footer/>
        </div>;
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));