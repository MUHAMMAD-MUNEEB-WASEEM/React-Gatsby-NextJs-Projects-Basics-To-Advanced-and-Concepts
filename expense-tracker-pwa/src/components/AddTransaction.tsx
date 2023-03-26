import React, { useState, useContext } from 'react';
import { GlobalContext } from "./context/GlobalState"

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);

    const [description, setDescription]:any= useState('');//to avoid uncontrolled to control issue
    const [transactionamount, setTransactionAmount]:any= useState(0);

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const newTransaction : {id:number, description: any, transactionamount: number} = {
            id: new Date().getTime(),
            description,
            transactionamount: +transactionamount
        }

        addTransaction(newTransaction);
        
        //The below two lines of code will clear input fields on submit
        setDescription('');
        setTransactionAmount(0);

    }
    return (
        <div>
            <h3> 
                Add New Transaction
            </h3>
            <form onSubmit={onSubmit}>  
                
                <div>
                   
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input   type="text"
                             id="description" 
                             placeholder="Detail of Transaction"
                             value={description}
                             onChange={(e) => setDescription(e.target.value)}//update description when add second time
                    />

                </div>

                <div className="form-control">    
                    
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionamount" 
                            placeholder="Amount of Transaction"
                            value={transactionamount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                    />

                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
     </div>
        
    )
}