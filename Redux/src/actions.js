export function handleLogin(username) {
    return {
      type: 'USER_LOGIN',
      username
    }
  }
export function handleLogout(username) {
    return {
      type: 'USER_LOGOUT',
      username
    }
}
export function produceError() {
  return {
    type: 'PRODUCE_ERROR',
  }
}
