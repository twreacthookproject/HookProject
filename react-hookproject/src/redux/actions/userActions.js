import * as actionTypes from './actionTypes';

export function loginSuccess(user) {
  return { type: actionTypes.LOGIN_SUCCESS, payload: user };
}

export function loginFailure(error) {
  return { type: actionTypes.LOGIN_FAILURE, payload: error };
}

export function logout() {
  return { type: actionTypes.LOGOUT };
}

export function login(email, password) {
  return function (dispatch) {
    var url="http://localhost:3001/users";
    fetch(url)
    .then(response => response.json())
    .then(data =>{
    var user=data.find(x=>x.username === email && x.password === password);
    if(user)
        dispatch(loginSuccess(user));
    else
    {
        const error = 'Geçersiz e-posta veya şifre';
        dispatch(loginFailure(error));
    }
  });
}
}