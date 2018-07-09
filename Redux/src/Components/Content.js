import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import PreviousUsersList from './PreviousUsersList'

const Content = ({ logged }) => !logged ? <Login /> : <PreviousUsersList />

const mapStateToProps = state => ({
    logged: state.logged || false,
})

export default connect(mapStateToProps)(Content)
