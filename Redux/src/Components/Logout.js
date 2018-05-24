import React, { Component } from 'react'
import { handleLogout } from '../actions'
import { connect } from 'react-redux'

const Logout = ({ currentUser, handleLogout }) = (
    <button className='logout' onClick={() => handleLogout(currentUser)}>
        Logout
    </button>
)

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    handleLogout: currentUser => dispatch(handleLogout(currentUser)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Logout)
