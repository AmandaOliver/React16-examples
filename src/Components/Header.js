import React, { Component } from 'react'
import Join from './Join'
import Logout from './Logout'

import { connect } from 'react-redux';

class Header extends Component {    
    render() {
        const { logged } = this.props;
        console.log(logged)
        return (
            <header className='header'> <span className='title'>Demo Redux</span>
                {logged ? <Logout /> : <Join />}
            </header>
        )
    }
}

const mapStateToProps = state => ({
    logged: state.logged || false
})

export default connect(mapStateToProps)(Header)