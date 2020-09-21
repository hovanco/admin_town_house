import * as Types from "../constants/ActionTypes";
var initialState = {
  loading: false,
  data: []
};

var findIndex = (categorys, id) => {
  var result = -1;
  categorys.data.forEach((category, index) => {
    if (category.id === id) {
      result = index;
    }
  });
  return result;
}

const categorys = (state = initialState, action) => {
  var index = -1;
  var { id, category } = action;
  switch (action.type) {
    case Types.FETCH_CATEGORIES:
      state = action.categorys;
      return { ...state };
    case Types.DELETE_CATEGORY:
      index = findIndex(state, id);
      state.splice(index, 1);
      return { ...state };
    case Types.ADD_CATEGORY:
      state.data.push(action.category); 
      return { ...state };
    case Types.UPDATE_CATEGORY:
      index = findIndex(state, category.id); 
      state[index] = category;
      return { ...state };
    default: return { ...state };
  }
};
export default categorys;
