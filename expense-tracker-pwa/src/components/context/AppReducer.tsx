const AppReducer = (state: {transactions:any}, action: any) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions
                    .filter((transaction: {id:any})  => transaction.id !== action.payload)
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