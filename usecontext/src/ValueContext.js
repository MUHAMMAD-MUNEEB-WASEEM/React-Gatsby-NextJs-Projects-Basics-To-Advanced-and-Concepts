import React from 'react';

//const ValueContext = React.createContext(45);

//we have created a context using React.createContext(45) and store it in
//some random variable ValueContext. 45 is passed as argument which is like default
//value. Like if no value provide to ValueContext, then it will by default use 45.

//Previously we have just value and we need to update it by ourselves, now we add
//defauilt function to Valuecontext at index 1, so by that we can update our value
//by calling index 1
const ValueContext = React.createContext(45, () =>{});

export default ValueContext;//to use in other files