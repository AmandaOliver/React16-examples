import React, { Component } from 'react'
import handleLogOut from '../actions'

export default class Logout extends Component {
    render() {
        return (
            <button className='logout'>Logout</button>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    handleSubmit: dispatch(handleLogOut()),
});

export default connect(null, mapDispatchToProps)(Logout);