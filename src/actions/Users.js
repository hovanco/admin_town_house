import * as Types from "./../constants/ActionTypes";
import { callApi } from "./../utils/apiCaller";

const token = localStorage.getItem("_access_token");

// users
// users?pageSize=15&sortBy=id

// **********************************************FETCH USERS********************************************
export const actFetchUsersRequest = () => {
  return (dispatch) => {
    return callApi("users", "GET", null).then(res => { // fetch data don't need token
      return callApi("users").then(ress => {
        dispatch(actFetchUsers(ress.data));
      })
    });
  };
}

export const actFetchUsers = (users) => {
  return {
    type: Types.FETCH_USERS,
    users
  }
}
// **********************************************DELETE USER********************************************
export const actDeleteUserRequest = (id) => {
  return dispatch => {
    return callApi(`users/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchUsersRequest())
    });
  }
}

export const actDeleteUser = (id) => {
  return {
    type: Types.DELETE_USER,
    id
  }
}

// **********************************************ADD USER********************************************
export const actAddUserRequest = (user) => {
  return dispatch => {
    return callApi(`users/sign-up`, "POST", user, token).then(res => {
      return callApi(`users/sign-up`).then(ress => { 
        dispatch(actFetchUsers(ress.data));
      })
    });
  }
}

export const actAddUser = (user) => {
  return {
    type: Types.ADD_USER,
    user
  }
}
// **********************************************GET USER********************************************
export const actGetUserRequest = (id) => {
  return dispatch => {
    return callApi(`users/${id}`, "GET").then(res => {
      dispatch(actGetUser(res.data));
    });
  }
}

export const actGetUser = (user) => {
  return {
    type: Types.EDIT_USER,
    user
  }
}
// **********************************************UPDATE USER********************************************
export const actUpdateUserRequest = (user) => {
  return dispatch => {
    return callApi(`users/${user.id}`, "PUT", user, token).then(res => {
      console.log(res);
      return callApi(`users`).then(ress => { 
        console.log(ress);
        dispatch(actFetchUsers(ress.data));
      })
    });
  }
}

export const actUpdateUser = (user) => {
  return {
    type: Types.UPDATE_USER,
    user
  }
}