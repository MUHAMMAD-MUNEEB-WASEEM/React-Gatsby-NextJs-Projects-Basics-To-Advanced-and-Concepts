import React from 'react';
import './App.css';
import Child from './Child';
import Child2 from './Child2';

function Parent() {

    //*****************************Code 1**************************
    
    //Case without using context


    //Case without using context

    // function Parent(props) {
    //     return (
    //       <div>
    //          Parent
    //         <Child num={props.num}></Child>
    //       </div>
    //     );
    //   }


  return (
    <div>
       Parent
      <Child></Child>
      <Child2></Child2>
    </div>
  );
}

export default Parent;
