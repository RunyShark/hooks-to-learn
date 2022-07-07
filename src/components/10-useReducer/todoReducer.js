export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      if (
        initialState.find(
          (data) => data.descrpcion === action.payload.descrpcion
        )
      ) {
        return [...initialState];
      }
      return [...initialState, action.payload];
    case "[TODO] delete one taks":
      return initialState.filter((data) => data.id !== action.payload);

    case "[TODO] end one taks":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    default:
      return initialState;
  }
};
