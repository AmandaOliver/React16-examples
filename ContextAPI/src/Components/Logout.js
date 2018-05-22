import React, { Component } from 'react'
import { handleLogOut } from '../actions'
import { connect } from 'react-redux'

class Logout extends Component {
    render() {
        const { handleLogOut } = this.props;
        return (
            <button className='logout' onClick={()=>handleLogOut()}>Logout</button>
        )
    }
}

export default connect(null, { handleLogOut })(Logout);
