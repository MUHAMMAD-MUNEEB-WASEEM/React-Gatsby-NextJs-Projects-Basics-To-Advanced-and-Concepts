import React, { useReducer } from 'react';
import './App.css';
import numberReducer from './numberReducer'

function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 52);

    //1 above we have defined the reducer, which has value(state) and functio(dispatch)
    //to perform actions.

    //2 for increment, we pass dispatch({type:"INCREMENT"}), now if we use useState, 
    //we can pass only one action within the function like type, but as we are using
    //reducer, so we can pass multiple actions like val and many more.
    
    //3 dispatch({type: "INCREMENT", val: 10}); for increment
    //4 3 dispatch({type: "DECREMENT", val: 10}); for decrement
    
    return (
    <div>
      Child2: {state}
      <br />
      <button onClick={()=>{ dispatch({type:"INCREMENT", val: 10}); }}>Increment</button>
      <button onClick={()=>{ dispatch({type:"DECREMENT", val: 30}); }}>Decrement</button>
    </div>
  );
}

export default Child2;
