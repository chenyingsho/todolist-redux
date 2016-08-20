import React from 'react'
import {connect} from 'react-redux'
const Add = React.createClass({
    add(){
        this.props.onAdd(this.refs.input.value)
    },
    clearText(){
        this.refs.input.value = '';
    },
    render: function () {
        return <div>
            <p>Todos</p>
            <input type="text" ref="input" onClick={this.clearText}/>
            <button onClick={this.add}>add</button>
        </div>;
    }
});

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (text)=> {
          dispatch({type:"ADD",text});
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(Add);