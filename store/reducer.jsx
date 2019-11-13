let lastId = -1;

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      lastId += 1;
      return [...state, { ...action.payload, id: lastId }];
    case "TOGGLE_TASK":
      return state.map(t => todo(t, action));
    case "SHOW_ALL":
      return state.map(t => showAll(t, action));
    case "SHOW_COMPLETED":
      return state.map(t => completed(t, action));
    default:
      throw new Error();
  }
};

const todo = (state, action) => {
  if (action.id === state.id) {
    return { ...state, completed: !state.completed };
  }
  return state;
};

const showAll = (state, action) => {
  return { ...state, hidden: false };
};

const completed = (state, action) => {
  if (state.completed) {
    return { ...state, hidden: false };
  }
  return { ...state, hidden: true };
};

export default reducer;
