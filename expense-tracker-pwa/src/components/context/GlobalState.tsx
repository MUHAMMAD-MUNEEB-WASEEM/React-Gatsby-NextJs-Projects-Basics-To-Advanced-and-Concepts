import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";

const initialState: any = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}: any) => {

    const  [state, dispatch] = useReducer(AppReducer, initialState);

    function delTransaction(id:number) {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id,//delete transaction by id
        })
    }

    function addTransaction(transaction:any){
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                delTransaction,
                addTransaction
            }
            }> 
            {children }
        </GlobalContext.Provider>
    )
}    