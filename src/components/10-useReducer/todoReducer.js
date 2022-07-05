export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      console.log(initialState);
      if (
        initialState.find(
          (data) => data.descrpcion === action.payload.descrpcion
        )
      ) {
        return [...initialState];
      }
      return [...initialState, action.payload];
    case "[TODO] delete one taks":
      const remplazo = initialState.filter(
        (data) => data.id !== action.payload
      );
      return remplazo;

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
