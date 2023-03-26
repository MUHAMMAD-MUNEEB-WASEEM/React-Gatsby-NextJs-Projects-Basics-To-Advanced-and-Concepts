import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  let data = {title: "Waiting for fetching"};
  let [todo, setTodo] = useState(data);

  //1. We are fetchin data in a same way as we did in JS, but here we used useEffect
 
  useEffect(()=> {
    async function fetchData(){
     
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");//fetch data, await use to get resolve response
      //above we got the data, and to convert to json, we need await response.json();
      console.log("response = ", response);

      const data2 = await response.json();//converting to json
      setTodo(data2);
      console.log("data", todo);

    }
    fetchData();
  });

  return (
    <div >
        Hello Fetch
        <span>Title: {todo.title}</span>
    </div>
  );
}

export default App;
