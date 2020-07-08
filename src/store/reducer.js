const initialState = {
  value: "",
};
const reducer = (state = initialState, action) => {
  if (action.type === "SEARCH_RESULT") {
    state = {
      ...state,
      value: action.searchResult,
    };
    return state.value;
  }
};

export default reducer;
