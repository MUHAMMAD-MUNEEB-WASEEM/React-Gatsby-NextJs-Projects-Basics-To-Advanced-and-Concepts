const AppReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions
                    .filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
      default:
            return state;
        };
}
//transaction.id !==action.payload means, that new transaction.id will not have provided/previous payload or provided/previous transaction.id
export default AppReducer;