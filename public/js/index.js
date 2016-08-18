import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './createRedux';

const store = createStore(reducer);

class Todolist extends Component {
    add(text){
        store.dispatch({type:'ADD',text})
    }

    toggle(index) {
        store.dispatch({type:'TOGGLE', index})
    }

    show(filterName){
        store.dispatch({type:"FILTER",filterName})
    }

    filterTodos() {
        if(store.getState().filterName === 'ALL') {
            return store.getState().todos;
        } else if(store.getState().filterName === 'ACTIVE') {
            return store.getState().todos.filter(todo => !todo.isDone);
        } else {
            return store.getState().todos.filter(todo => todo.isDone);
        }
    }

    render() {
        return <div>
            <h1>todos</h1>
            <Add onAdd={this.add.bind(this)}/>
            <Todos todos={this.filterTodos()} onToggle={this.toggle.bind(this)}/>
            <Item onShow={this.show} />
        </div>
    }
}
class Item extends React.Component {
    show(type){
        this.props.onShow(type)
    }

    render() {
        return <div>
            <span onClick={this.show.bind(this,'ALL')}>ALL</span>&nbsp;&nbsp;&nbsp;
            <span onClick={this.show.bind(this,'ACTIVE')}>ACTIVE</span>&nbsp;&nbsp;&nbsp;
            <span onClick={this.show.bind(this,'COMPLETE')}>COMPLETE</span>
        </div>
    }
}

class Todos extends React.Component {
    toggle(index) {
        this.props.onToggle(index);
    }

    render() {
        return <div>
            {this.props.todos.map((todo,index) => {
                return <div key={index}>
                    <input type="checkbox" checked={todo.isDone} onChange={this.toggle.bind(this, index)}/>
                    <span style={{"textDecoration": todo.isDone ? "line-through" : ""}}>{todo.text}</span>
                </div>
            })}
        </div>
    }
}

class Add extends React.Component {
    add(){
        const test=this.refs.add.value;
        this.props.onAdd(test);
    }
    render() {
        return <div>
            <input type="text" ref="add"/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>
    }
}

class Delete extends React.Component {
    render() {
        return <div>

        </div>
    }
}


ReactDOM.render(<Todolist/>, document.getElementById('root'));

store.subscribe(()=>{
    ReactDOM.render(<Todolist/>, document.getElementById('root'));
})