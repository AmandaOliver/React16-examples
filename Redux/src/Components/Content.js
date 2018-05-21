import React, { Component } from 'react';
import Login from './Login'
import { connect } from 'react-redux';


class Content extends Component {
    render() {
        const { logged, username } = this.props;
        return (
            !logged ? <Login /> : <h1 className="title">{`Welcome ${username}!`}</h1>
        )
    }
}

const mapStateToProps = state => ({
    logged: state.logged || false,
    username: state.currentUser,
})

export default connect(mapStateToProps)(Content)
