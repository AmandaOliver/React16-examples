export function handleLogIn(user) {
    return {
      type: 'USER_LOGIN',
      user
    }
  }
export function handleLogOut() {
    return {
      type: 'USER_LOGOUT',
    }
}