import * as Types from "../../constants/ActionTypes";

var initialStateLanguages = {};

const languagesItemEditing = (state = initialStateLanguages, action) => {
  switch (action.type) {
    case Types.EDIT_LANGUAGE:
      return action.language.data; // toi them data
    default:
      return state;
  }
}
export default languagesItemEditing;