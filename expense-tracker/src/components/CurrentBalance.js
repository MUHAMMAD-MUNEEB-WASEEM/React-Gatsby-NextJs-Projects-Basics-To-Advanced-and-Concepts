import React, { useContext } from 'react';

//import the GlobalState
import { GlobalContext } from "./context/GlobalState";

function CurrentBalance() {

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionamount);
    const currentBalance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (

        <div>
            <h4>
                CURRRENT BALANCE
            </h4>
            <h1 id="balance">
                ${currentBalance}
            </h1>
        </div>
    );
}
export default CurrentBalance;