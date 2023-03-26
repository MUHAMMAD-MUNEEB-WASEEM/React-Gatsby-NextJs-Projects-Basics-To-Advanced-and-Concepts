import React, { useContext } from 'react';

//import the GlobalState

import { GlobalContext } from "./context/GlobalState";

export const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionamount);//using transactionamount

    const income = transactionAmounts
        .filter(transaction => transaction > 0)//income
        .reduce((acc, transaction) => (acc += transaction), 0)//add income to previous incomes
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)//expense
        .reduce((acc, transaction) => (acc += transaction), 0)//add expense to previous expense
        ).toFixed(2);

    return (
        <div className="inc-exp-container">
           
            <div>
                <h4>INCOME</h4>
                <p className="money plus">${income}</p>
            </div>
            
            <div>
                <h4>EXPENSE</h4>
                <p className="money minus">${expense}</p>
            </div>

        </div>
    )
}
