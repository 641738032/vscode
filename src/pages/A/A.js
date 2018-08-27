import React from 'react';

class A extends React.Component{
    contextTypes={
        name: React.PropTypes.string.isRequired,
    }
    render(){
        return(
            <div></div>
        )
    }
}
export default A;