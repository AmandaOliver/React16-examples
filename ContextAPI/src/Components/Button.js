import React from 'react'
import Logout from './Logout'
import UserDataContext from '../UserDataContext'

export default () => (
    <UserDataContext.Consumer>
        {({ logged }) =>
            logged ? <Logout /> : <button className='join'>Join us!</button>
        }
    </UserDataContext.Consumer>
)
