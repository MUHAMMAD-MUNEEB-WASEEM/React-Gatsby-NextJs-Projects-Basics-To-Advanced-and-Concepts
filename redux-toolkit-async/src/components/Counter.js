import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { counterUpdate, decrement, increment, incrementByAmount } from "../store/counterSlice";


function Counter() {
    //const [counter, setCounter] = useState(0);
    const [value, setValue]= useState(0);

    const dispatch = useDispatch();
    const {counter, isLoading} = useSelector( (state)=>{
        console.log(state);
        return {
            counter: state.counter.count,
            isLoading: state.counter.isLoading}
    } );

    if(isLoading) return <div>Loading</div>
    
  return (
    <div>
        <div>Counter:{counter}</div>

        <div>
            <button onClick= {()=>{
                //setCounter(counter+1)
                //dispatch ( {type:"INCREMENT"} )
                dispatch(increment());
            }}>Increament</button>
            <br/>
            <button onClick= {()=>{
                //setCounter(counter-1)
                //dispatch ( {type:"DECREMENT"} )
                dispatch(decrement());
            }}>decreament</button>
            <br/>
        </div>
        <br/>
        <div>
            <input type='text' onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <br/>
            <button onClick= {()=>{
                //setCounter(counter+Number(value))
                //dispatch ( {type:"INCREMENT_BY_AMOUNT", payload: Number(value)} )
                dispatch(incrementByAmount(Number(value)))
                }}>Increament by value</button>
        </div>

        <div>
        <button onClick= {()=>{
                dispatch(counterUpdate())
                }}>Increament from Server</button>
        </div>
    </div>
  );
}

export default Counter;
