import React, { Component } from 'react'
import Logout from './Logout'
import UserDataContext from '../UserDataContext'

export default ({ children }) => (
    <UserDataContext.Consumer>
        {({ logged }) => (
            <header className='header'>
                <span className='title'>
                    {children}
                </span>
                {logged ? <Logout /> : <button className='join'>Join us!</button>}
            </header>
        )}
    </UserDataContext.Consumer>
)