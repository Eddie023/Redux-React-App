export const SET_LOGIN = "SET_LOGIN";

export const setLogin = isLogin => ({
  type: SET_LOGIN,
  payload: {
    isLogin
  }
});
