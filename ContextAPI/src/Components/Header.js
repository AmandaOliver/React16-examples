import React, { Component } from 'react'
import Logout from './Logout'
import { Provider, Consumer } from '../Contexts/UserContext';

export default class Header extends Component {
    render() {
        console.log('logged in header', this.props.obj)
        return (
            <header className='header'> <span className='title'>{this.props.children}</span>
                        {/* {!logged ? <Logout /> :  <button className='join'>Join us!</button>} */}
            </header>
                       
        )
    }
}
