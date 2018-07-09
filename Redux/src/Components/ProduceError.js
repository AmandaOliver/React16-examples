import React from 'react'
import UserDataContext from '../UserDataContext'

export default () => (
    <UserDataContext.Consumer>
        {({ produceError }) =>
            <button className='error' onClick={() => produceError()}>Produce an Error</button>
        }
    </UserDataContext.Consumer>
)

const mapDispatchToProps = dispatch => ({
    handleLogout: currentUser => dispatch(handleLogout(currentUser)),
})
