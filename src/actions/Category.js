// action of store
import * as Types from "../constants/ActionTypes";
import { callApi } from "../utils/apiCaller";

const token = localStorage.getItem("_access_token")

// **********************************************FETCH CATEGORY********************************************
export const actFetchCategorysRequest = () => {
  return (dispatch) => {
    return callApi("admin/host-categories", "GET", null).then(res => { // fetch data don't need token
      console.log("actFetchCategorysRequest -> res", res)
      dispatch(actFetchCategorys(res.data))
    });
  };
}

export const actFetchCategorys = (categorys) => {
  return {
    type: Types.FETCH_CATEGORIES,
    categorys
  }
}
// **********************************************DELETE CATEGORY********************************************
export const actDeleteCategoryRequest = (id) => {
  return dispatch => {
    return callApi(`admin/host-categories/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchCategorysRequest())
    });
  }
}

export const actDeleteCategory = (id) => {
  return {
    type: Types.DELETE_CATEGORY,
    id
  }
}
// **********************************************ADD CATEGORY********************************************
export const actAddCategoryRequest = (category) => {
  return dispatch => {
    return callApi(`admin/host-categories`, "POST", category, token).then(res => {
      return callApi(`admin/host-categories`).then(ress => { 
        dispatch(actFetchCategorys(ress.data));
      })
    });
  }
}

export const actAddCategory = (category) => {
  return {
    type: Types.ADD_CATEGORY,
    category
  }
}
// **********************************************GET CATEGORY********************************************
export const actGetCategoryRequest = (id) => {
  return dispatch => {
    return callApi(`admin/host-categories/${id}`, "GET").then(res => {
      dispatch(actGetCategory(res.data));
    });
  }
}

export const actGetCategory = (category) => {
  return {
    type: Types.EDIT_CATEGORY,
    category
  }
}
// **********************************************UPDATE CATEGORY********************************************
export const actUpdateCategoryRequest = (category) => {
  return dispatch => {
    return callApi(`admin/host-categories/${category.id}`, "PUT", category, token).then(res => {
      return callApi(`admin/host-categories`).then(ress => { 
        dispatch(actFetchCategorys(ress.data));
      })
    });
  }
}

export const actUpdateCategory = (category) => {
  return {
    type: Types.UPDATE_CATEGORY,
    category
  }
}