//1 Reducer is used to update the state of whole application or update the state 
//of more components rather than only single component

//2 for example: You have an employe data like its name, age, year in company and 
//and many other things. If you want to update the state of all these things, we use
//reducer to update them all. useState update the state of only single component.
//Reducer can update the state of multiple components and can have multiple actions.

//3 After updating the state of existing component, it returns new component, so its
//like pure function. It does not depend on any external variables.

//reducer need to parameter. one is value or state, other is action which is used
//to perform mulitple task or perform multiple actions on the state

//its switch case structure in JS. if action.type is increment, then it update its
//value by action.val other wise decrement its value by action.val

const numberReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.val
      case 'DECREMENT':
        return state - action.val
      default:
        throw new Error()

    }
}
export default numberReducer;