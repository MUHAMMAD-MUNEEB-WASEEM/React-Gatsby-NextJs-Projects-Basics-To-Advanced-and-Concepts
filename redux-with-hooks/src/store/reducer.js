// Var user = {name:”Muneeb”, email:”abc@gmail.com”}
// Updating user;
// Var newUser = {…user, name:”Zia Khan”, age:24}
// So what we does is, we copy all the properties from the user, then update name, and add age property as well and store it in newUser.

import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT } from "./action"

const initialState={
    counter: 0
}
export const counterReducer = (state=initialState, action)=>{
    switch(action.type){
        case INCREMENT:{
            return {...state, counter: state.counter+1}
            
        }
        case DECREMENT:{
            return {...state, counter: state.counter-1}
        }
        case INCREMENT_BY_AMOUNT:{
            return {
                ...state, counter: state.counter+action.payload
            }
        }
        default: {
            return state
        }
        
    }
}