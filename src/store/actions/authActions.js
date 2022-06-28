const login = (user) => ({
  type: 'LOGIN',
  payload: user,
});

const signup = (user) => ({
  type: 'LOGIN',
  payload: user,
});

const logout = () => ({
  type: 'LOGOUT',
});

export { login, signup, logout };
