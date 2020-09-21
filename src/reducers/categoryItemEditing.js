import * as Types from "../constants/ActionTypes";

var initialState = {};

const categoryItemEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_CATEGORY:
      return action.category.data; // toi them data
    default:
      return state;
  }
}
export default categoryItemEditing;