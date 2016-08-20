import React from 'react'
import {connect} from 'react-redux'

const Footer=React.createClass({
    changeShow(a){
            this.props.changeShow(a)
    },
   render:function(){
       const list = ['ALL','ACTIVE','COMPLETD'].map((a, index) => {
           "use strict";
           return <span onClick={this.changeShow.bind(this, a)} key={index}>{a+'    '}</span>
       })
       return <div>
           {list}
        </div>
   }
});

function mapDispatchToProps(dispatch){
    return {
        changeShow:(filterName)=>{

            dispatch({type:'SHOW', filterName: filterName});
        }
    }

}
export default connect(()=>{return {}},mapDispatchToProps)(Footer)
