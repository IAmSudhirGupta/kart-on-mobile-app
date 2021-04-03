export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(data) {
  return {
    type: LOGIN,
    payload: data,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
