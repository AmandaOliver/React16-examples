import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserList extends Component {
    renderCustomUserList(userList, currentUser) {
        let customUserList = []
        userList.forEach(user => {
            if (user !== currentUser) {
                customUserList.push(<li key={user}>{user}</li>);
            }
        })
        return customUserList.length > 0 ?
            this.renderList(customUserList)
            : <h4>You are the first one, congrats =) </h4>;
    }
    renderList(customUserList) {
        return (
            <div>
                <h4>You need to be faster, this people were here before you: </h4>
                <ul>
                    {customUserList.reverse()}
                </ul>
            </div>
        )
    }
    render() {
        const { currentUser, userList } = this.props;
        return (
            <div className="userlist">
                <h1>{`Welcome ${currentUser}!`}</h1>
                {this.renderCustomUserList(userList, currentUser)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userList: state.userList,
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(UserList)
