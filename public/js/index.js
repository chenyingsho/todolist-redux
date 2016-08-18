import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './createRedux';

const store = createStore(reducer);

class Todolist extends Component {
    add(text) {
        store.dispatch({type: 'ADD', text})
    }

    toggle(index) {
        store.dispatch({type: 'TOGGLE', index})
    }

    show(filterName) {
        store.dispatch({type: "FILTER", filterName})
    }

    filterTodos() {
        if (store.getState().filterName === 'ALL') {
            return store.getState().todos;
        } else if (store.getState().filterName === 'ACTIVE') {
            return store.getState().todos.filter(todo => !todo.isDone);
        } else {
            return store.getState().todos.filter(todo => todo.isDone);
        }
    }

    deleteTodo(index) {
        store.dispatch({type: 'DELETE', index})
    }

    render() {
        return <div>
            <h1>todos</h1>
            <Add onAdd={this.add.bind(this)}/>
            <Todos todos={this.filterTodos()} onToggle={this.toggle.bind(this)} onDelete={this.deleteTodo.bind(this)}/>
            <Item onShow={this.show} filterName={store.getState().filterName}/>
        </div>
    }
}

class Item extends React.Component {
    show(type) {
        this.props.onShow(type)
    }

    render() {
        const links = ['ALL', 'ACTIVE', 'COMPLETED'].map(filterName => {
            return <span style={{"fontSize": this.props.filterName === filterName ? "28px" : "16px"}}
                         onClick={this.show.bind(this, filterName)}>{filterName}&nbsp;&nbsp;&nbsp;</span>;

        });
        return <div>
            {links}
        </div>
    }
}

class Todos extends React.Component {
    toggle(index) {
        this.props.onToggle(index);
    }

    deleteTodo(index) {
        this.props.onDelete(index);
    }

    render() {
        return <div>
            {this.props.todos.map((todo, index) => {
                return <div key={index}>
                    <input type="checkbox" checked={todo.isDone} onChange={this.toggle.bind(this, todo.id)}/>
                    <span style={{"textDecoration": todo.isDone ? "line-through" : ""}}>{todo.text}</span>
                    <button onClick={this.deleteTodo.bind(this, todo.id)}>X</button>
                </div>
            })}
        </div>
    }
}

class Add extends React.Component {
    add() {
        const test = this.refs.add.value;
        this.props.onAdd(test);
        this.refs.add.value = '';
    }

    render() {
        return <div>
            <input type="text" ref="add"/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>
    }
}


ReactDOM.render(<Todolist/>, document.getElementById('root'));

store.subscribe(()=> {
    ReactDOM.render(<Todolist/>, document.getElementById('root'));
})