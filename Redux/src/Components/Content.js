import React, { Component } from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import UserList from './UserList'

const Context = ({ logged }) => !logged ? <Login /> : <UserList />

const mapStateToProps = state => ({
    logged: state.logged || false,
})

export default connect(mapStateToProps)(Content)
