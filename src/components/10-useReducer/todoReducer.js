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

    default:
      return initialState;
  }
};
