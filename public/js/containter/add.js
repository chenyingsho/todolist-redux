import React from 'react'
export  default React.createClass({
    render: function () {
        return <div>
            <p>Todos</p>
            <input type="text" ref="input"/>
            <button>add</button>
        </div>;
    }
});
