import React, { useEffect, useState } from 'react';

let baseUrl = "fakeapi"


export const Todos = () => {

    let [data, setData] = useState([]);

    useEffect (()=>{
        
        //fetching data from getTodos api
        fetch(`/${baseUrl}/getTodos`)
            .then(res => res.json())
            .then(data => console.log('data', data))

        //fetching data from getUsers api    
        fetch(`/${baseUrl}/getUsers`)
            .then(res => res.json())
            .then(data => console.log('data', data))
    }
)    
    const addToDoHandler = () => {
        fetch(`/${baseUrl}/addTodos`,{
            method:"POST",
            body:{id:1234, text:"text"}
        }).then(res=>{
            console.log("success", res)
        }).catch(error =>{
            console.log("Error addTodo", error)
        })
    }

    const getDataHandler = () => {
        fetch(`/${baseUrl}/getTodos`)
        .then(res => res.json())
        .then(data => {
            setData(data.todos)
            console.log('data', data)})

    }
    return (
        <div>
            <div>
                Hello from Todos
                <br />
                <button onClick={addToDoHandler}>add</button>
            </div>
            <div>
                
                <button onClick={getDataHandler}>get Todos</button>
                    {
                        JSON.stringify(data)
                    }
                
            </div>
        </div>
        
    )
}