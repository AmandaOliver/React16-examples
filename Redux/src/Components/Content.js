import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import PreviousUsersList from './PreviousUsersList'

const fail = () => {
    throw new Error('I am evil!!');
}
const Content = ({ logged, shouldFail }) => {
    shouldFail && fail();
    return !logged ? <Login /> : <PreviousUsersList />
}

const mapStateToProps = state => ({
    logged: state.logged,
    shouldFail: state.shouldFail
})

export default connect(mapStateToProps)(Content)
