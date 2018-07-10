import React from 'react'
import { connect } from 'react-redux'
import { produceError } from '../actions'

const ErrorButton = ({produceError}) => (
    <button className='error' onClick={() => produceError()}>Produce an Error</button>
)

const mapDispatchToProps = dispatch => ({
    produceError: () => dispatch(produceError()),
})

export default connect(null, mapDispatchToProps)(ErrorButton)
