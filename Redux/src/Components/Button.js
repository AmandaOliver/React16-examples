import React from 'react'
import Logout from './Logout'
import { connect } from 'react-redux';

const Button = ({ logged }) => (
    logged ? <Logout /> : <button className='join'>Join us!</button>
)

const mapStateToProps = state => ({
    logged: state.logged || false
})

export default connect(mapStateToProps)(Button)
