
import './App.css';
import { useRef, useState } from 'react';

function UserForm() {
    const name = useRef();
    const age = useRef();
    const [nameError, setNameError] = useState("")
    const [ageError, setAgeError] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("hello Submit")
        console.log("Name: ", name.current.value)
        console.log("Age: ", age.current.value)
        //validation
        if(!name.current.value){
            setNameError("Name field is Required")

        }
        else if(name.current.value.length > 20){
            setNameError("Name field must be less than 20 char")

        }
    }
  return (
    <div>
        <div>
            User Form
        </div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Name</label>
            <input id="name" ref={name} type="text"/>
            <div style={{color: "Red"}}>{nameError}</div>
        </div>
        <div>
            <label htmlFor="">Age</label>
            <input id="age" ref = {age} type="number"/>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  );
}

export default UserForm;
