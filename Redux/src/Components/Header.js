import React, { Component } from 'react'
import Logout from './Logout'

import { connect } from 'react-redux';

class Header extends Component {
    render() {
        const { logged } = this.props;
        return (
            <header className='header'>
                <span className='title'>{this.props.children}</span>
                {logged ? <Logout /> : <button className='join'>Join us!</button>}
        </header>
        )
    }
}

const mapStateToProps = state => ({
    logged: state.logged || false
})

export default connect(mapStateToProps)(Header)
