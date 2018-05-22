import React, { Component } from 'react'
import Logout from './Logout'
import UserDataContext from '../UserDataContext';

export default class Header extends Component {
    render() {
        return (
            <UserDataContext.Consumer>
                {({ logged }) => {
                    console.log(logged)
                    return (
                        <header className='header'>
                            <span className='title'>{this.props.children}</span>
                            {logged ? <Logout /> : <button className='join'>Join us!</button>}
                        </header>
                    )
                }}
            </UserDataContext.Consumer>
        )
    }
}
