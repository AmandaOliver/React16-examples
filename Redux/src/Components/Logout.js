import React, { Component } from 'react'
import { handleLogOut } from '../actions'
import { connect } from 'react-redux'

class Logout extends Component {
    render() {
        const { handleLogOut, username } = this.props;
        return (
            <button className='logout' onClick={()=>handleLogOut(username)}>Logout</button>
        )
    }
}
const mapStateToProps = state => ({
    username: state.currentUser
})
export default connect(mapStateToProps, { handleLogOut })(Logout);
