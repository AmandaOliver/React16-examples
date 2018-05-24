import React, { Component } from 'react'
import UserDataContext from '../UserDataContext'

export default () => (
    <UserDataContext.Consumer>
        {({currentUser, handleLogout}) => 
            <button className='logout' onClick={() => handleLogout(currentUser)}>
                Logout
            </button>
        }
    </UserDataContext.Consumer>
)
