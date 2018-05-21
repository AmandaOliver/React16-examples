import Users from './Users'

export default function (state, action) {
    const newState = {};
	switch (action.type) {
        case 'USER_LOGIN':
            console.log('USER_LOGIN action triggered')
            if (Users.some(user => JSON.stringify(user) === JSON.stringify(action.user))) {
                newState.logged = true;
                newState.user = action.user;
            }
            return newState;
        case 'USER_LOGOUT':
            newState.logged = false;
        default:
            return state;
            
    }
}