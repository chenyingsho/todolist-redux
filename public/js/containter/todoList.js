import React from 'react'
import {connect} from 'react-redux'

const TodoList = React.createClass({
  render: function() {
      const todo=this.props.todos.map((todo,index)=>{
          return <div key={index}>
              {todo.text}
              <button>X</button>
          </div>
      });
    return <div>
        {todo}
    </div>;
  }
});


function mapStateToProps(state){
    return {todos:state.todos}
}

export default connect(mapStateToProps)(TodoList);