import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserList extends Component {
    render() {
        const { userList } = this.props;
        console.log(userList)
        return (
            <ol>
                {userList.map(user => <li>{user}</li>)}
            </ol>
        )
    }
}

const mapStateToProps = state => ({
    userList: state.userList,
})

export default connect(mapStateToProps)(UserList)
