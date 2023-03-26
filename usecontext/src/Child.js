import React, { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child() {

    //*****************************Code 1**************************

 
    // function Child(props) {
    //     return (
    //       <div>
    //         Child number: {props.num}
    //       </div>
    //     );
    //   }

    //*****************************Code 2**************************

    //In below code, we have only let value=81 
    //so for that we just only need to call it here, value = useContext(valueContext)=81
    //this 81 is used in div
    //now to update value, we need some function, so we define value context with default
    //function in valuecontext.js, and let value with useState in App.js so that value
    //array will have function to update it.
    //then we pass that value to ValueContext.provide tag, so that value array having
    //some value at value[0] and function to update that value at index value[1] can
    //be used.

    //     let value = useContext(ValueContext);
//     return (
//     <div>
//       Child number: {value}
//     </div>
//   );
// }

    //now in recent code, we call value context in variable value, so this time variable
    //value will have an array, which has 51 at value[0] and function to update at
    //value[1].
    
    //to show value, we use value[0]
    //to update value, we use function at value[1] and increament value at index[0]
    //so value1(++value[0]) is the function which update value at index value[0] 

    let value = useContext(ValueContext);
    return (
    <div>
      Child number: {value[0]}
      <br />
      <button onClick={()=>{value[1](++value[0])}}>Update Value</button>
    </div>
  );
}

export default Child;
