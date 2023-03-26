//GET API
//Get data from server: returns all data in the form of text

async function getData(){

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");//fetch data, await use to get resolve response
    //above we got the data, and to convert to json, we need await response.json();
    console.log("response = ", response);

    const data = await response.json();//converting to json
    console.log("data", data)

    //so by this, this api contains two promises, one for fetching the data and other to convert that data
    //into json
}

//POST API
async function postData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',//post api type, we can also pass get here.
        body: JSON.stringify({
            title:"My info",
            body: 'Data',
            userId: 104,

        }), //This is the main data which is in json data which is converted into string with the help of JSON.stringify
        headers: {
            "Content-type" : "application/json; charset=UTF-8", 
        },//header is used to pass content type which is json as mentioned with application/json
    });
    
    
    console.log("response = ", response);

    const data = await response.json();//converting to json
    console.log("data", data)

   
}
//getData();
postData();