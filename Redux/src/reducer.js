const initialState = {
    logged: false,
    currentUser: undefined,
    userList: []
}

export default function (state = initialState, action) {
	switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                logged: true,
                currentUser: action.user.username
            };
        case 'USER_LOGOUT':
            let newState = {
                userList: state.userList,
                logged: false
            }
            // if (!newState.userList.includes(action.username)) {
                newState.userList.push(state.currentUser)
            // }
            return newState;
        default:
            return state;
    }
}
