import React from 'react';
import './App.css';

//import components

import Header from './components/Header';
import CurrentBalance from './components/CurrentBalance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

//import global context
import { GlobalProvider } from './components/context/GlobalState';
import {configNotification} from './firebase';

//1 Expense tracker by Muhammad Muneeb Waseem is one part, all other 4 components
//lies in one container, thats why I created another div inside main div with 
//className= "container"

    // {/* <div className="container">
    // <CurrentBalance />
    // </div> */}


function App() {
  configNotification()
  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <CurrentBalance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;