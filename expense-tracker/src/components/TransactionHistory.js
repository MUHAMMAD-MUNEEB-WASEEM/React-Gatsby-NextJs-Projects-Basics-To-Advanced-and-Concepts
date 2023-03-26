import React, { useContext } from 'react'

//importing transaction
import { Transaction } from "./Transaction";

//importing GlobalContext
import { GlobalContext } from "./context/GlobalState";
export const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext)
    //if we only do const value = useContext(GlobalContext)
    //then in that case, it returns an array of value and function
    //at index value[0], we have a value and at index[1] we have a function
    //to update that value, here we only need values so we do destructuring
    //by using {transactions}->value[0]


    //console.log(transactions)
    //checking whether we are getting transactions value or not
    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}

