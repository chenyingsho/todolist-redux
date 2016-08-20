import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducers/app-reducer'
import  Todo from './containter/add'

let store = createStore(reducer);

const App = React.createClass({
  render: function() {
    return <div>
       <Todo/>
    </div>;
  }
});

ReactDOM.render(<App/>,document.getElementById('root'));