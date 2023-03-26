import React, { useContext } from 'react';

//importing globalstate
import { GlobalContext } from '../components/context/GlobalState';

export const Transaction = ({transaction}) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionamount > 0 ? '+': '-';
    const transactionType = transaction.transactionamount > 0 ? 'plus':'minus';
    return (    
        <li className={transactionType}>
             {transaction.description}
             <span>{sign}${Math.abs(transaction.transactionamount)}</span>
             <button className="delete-btn" 
                     onClick={()=> delTransaction(transaction.id)}>
                     X
             </button>
        </li>
    )
}
