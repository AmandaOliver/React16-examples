import React, { Component } from 'react'
import { handleLogout } from '../actions'
import { connect } from 'react-redux'

class Logout extends Component {
    render() {
        const { currentUser, handleLogout } = this.props;
        return (
            <button className='logout' onClick={() => handleLogout(currentUser)}>
                Logout
            </button>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    handleLogout: currentUser => dispatch(handleLogout(currentUser)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
