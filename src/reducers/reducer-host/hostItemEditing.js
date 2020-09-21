import * as Types from "../../constants/ActionTypes";

var initialStateHost = {};

const hostItemEditing = (state = initialStateHost, action) => {
  switch (action.type) {
    case Types.EDIT_HOST:
      return action.host.data; // toi them data
    default:
      return state;
  }
}
export default hostItemEditing;