import * as Types from "../../constants/ActionTypes";

var initialStateUsers = {};

const usersItemEditing = (state = initialStateUsers, action) => {
  switch (action.type) {
    case Types.EDIT_USER:
      return action.user.data; // toi them data
    default:
      return state;
  }
}
export default usersItemEditing;