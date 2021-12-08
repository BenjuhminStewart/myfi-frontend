// a reducer specifies application state changes in response to different actions

export default (state, action) => {
  switch (action.type) {
    // delete transaction query here?
    case "GET_ACCOUNT":
      return {
        ...state,
        loading: false,
        accounts: action.payload,
      };
    case "GET_TRANSACTION":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state, //send current state
        transactions: state.transactions.filter(
          (transaction) => transaction.tId != action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state, // send current state
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
