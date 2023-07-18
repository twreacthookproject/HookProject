import * as actionTypes from './actionTypes';

export function loginSuccess(user) {
  return { type: actionTypes.LOGIN_SUCCESS, payload: user };
}

export function loginFailure(error) {
  return { type: actionTypes.LOGIN_FAILURE, payload: error };
}

export function addToUser(user) {
  return { type: actionTypes.CREATE_USER_SUCCESS, payload: user };
}

export function deleteFromUser(user) {
  return { type: actionTypes.DELETE_USER_SUCCESS, payload: user };
}

export function updateUser(user) {
  return { type: actionTypes.UPDATE_USER_SUCCESS, payload: user };
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

export function saveUserApi(user) {
  return fetch("http://localhost:3001/users/" + (user.id || ""), {
    method: user.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveUser(user) {
  return function (dispatch) {
    return saveUserApi(user)
      .then((savedUser) => {
        user.id
          ? dispatch(updateUser(savedUser))
          : dispatch(addToUser(savedUser));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}