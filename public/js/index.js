import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Todolist extends Component {
    render() {
        return <div>
            <h1>todos</h1>
            <input type="text"/>
        </div>
    }
}

ReactDOM.render(<Todolist/>,document.getElementById('root'))