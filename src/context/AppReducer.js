const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log("INSIDE REDUCER", action.payload.text, action.payload.amount);
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: state.transactions.length,
            text: action.payload.text,
            amount: action.payload.amount
          }
        ]
      };
    case "REMOVE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default AppReducer;
