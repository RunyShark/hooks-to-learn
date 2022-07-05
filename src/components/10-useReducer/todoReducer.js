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
      const endTaks = initialState.find((data) => data.id === action.payload);
      if (endTaks) {
        endTaks.done = true;
        return [...initialState];
      }

      return [...initialState];

    default:
      return initialState;
  }
};
