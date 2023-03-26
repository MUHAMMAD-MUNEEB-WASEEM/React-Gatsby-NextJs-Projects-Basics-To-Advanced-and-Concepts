import React, {useState}  from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {

  //1 we have create a object using useState that contains number 45 and function 
  //to update that value

  //2 Now our task is to pass this information to child or other .js files.

  //3 what we have done we create Parent.js and Child.js files, and our tast is
  //to pass this number 45 information from this App.js file to Parent and Child.js
  //files.

  //4 we call parent tag in our App.js, now we pass that number 45 as property to
  //it, so we use num={number}, now we by this, we can call this number in parent.js
  //file using argument.num as our property name was num

  //5 we have pass props as argument, so we call this number 45 in parent.js by
  //props.num.

  //6 To pass this number 45 to child.js, we call child tag in parent.js, pass 
  //number 45 with the help of property num like num={number}, now child.js got
  //this number 45 also, and we can use this number 45 in child.js using 
  //argument.num or props.num

  //Call tags, pass property, fetch using argument.propertyname.

  //**************************Code 1******************************/


  //function App() {
  //  let [number, setNumber] = useState(45);
  // return (
  //   <div>
  //     Hello world
  //     <Parent num={number}></Parent>
  //   </div>
  // );
  //}

  //7 The above was the case without using context, we have to indiviually call
  //all properties everytime under childtags like <parent>, <child>

  //8 To make our work easier, Context can be used. It is like global variable

  //9 By defining the context, we can use it in any child component without 
  //explicitly calling it in child tags

  //10 Context has two main components. Provider and Consumer. When we have to 
  //provide some value to context, we use contextname.provider and set it value
  //using property.

  //11 when we have to use or consume that value in some child component, we use
  //let somename = useContext(contextname);
  //by that, somename variable got that value which we have provided to context, if
  //if not provide any value to context(means not use contextname.provide) than it
  //will use default value which we have used(in this case 45) at time of creating
  //the context

  //12 all those child component get benefit from context which comes under context
  //.provider tag, like here Parent component gets context value as it comes under
  //it

//   <ValueContext.Provider value={value}>

//   <div>
//     Hello world
//     <Parent></Parent>
//    </div>

// </ValueContext.Provider>

  //13 under parent component, child component comes as we can see in parent.js, so
  //child component also got context value and it can use it using useContext

  //Here context name is ValueContext. Don't forget to import in each component.

  //14 defining value to provide to context. If not provided, then context will use
  //its default value which was set to 45
  
  //let value = 81;


  //define value with useState, so that value will have 51 at value[0] and function to
  //update 51 at index value[1]. this value array will be provided to valueContext to pass
  //this whole value array to all child components, so that we can display value at
  //index value[0] and update value using function at index value[1]
  let value = useState(51);

  return (

    <ValueContext.Provider value={value}>

      <div>
        Hello world
        <Parent></Parent>
       </div>

    </ValueContext.Provider>
  );
}

export default App;
