import React, { Component } from 'react';
import Login from './Login'
import { connect } from 'react-redux';
import UserList from './UserList';

class Content extends Component {
    render() {
        const { logged } = this.props;
        return (
            !logged ? <Login /> : <UserList />
        )
    }
}

const mapStateToProps = state => ({
    logged: state.logged || false,
})

export default connect(mapStateToProps)(Content)
