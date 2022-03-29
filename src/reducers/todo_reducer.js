const todos_reducer = (state, action) => {
  if (action.type === "GET_ALL_TODOS") {
    return { ...state, todos: action.payload };
  }
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: action.payload };
  }
  if (action.type === "NEW_TODO") {
    return { ...state, newTodo: action.payload };
  }
  if (action.type === "DELETE_TODO") {
    return { ...state, deleteId: action.payload };
  }
  if (action.type === "TOGGGLE_CHECK") {
    return { ...state, toggleCheck: action.payload };
  }
};

export default todos_reducer;
