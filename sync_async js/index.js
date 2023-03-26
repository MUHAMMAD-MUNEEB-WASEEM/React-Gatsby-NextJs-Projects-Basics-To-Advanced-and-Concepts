// *****************code1********************

    // console.log("started js")  //0.0005, let say by default from js

    // let data = "content";

    // setTimeout( () =>{
    //     console.log("data")
    // }, 1000)                    // here we set delay of 1000ms -> 1 min

    // console.log("End js")       //0.0005

//by setting Timeout, "data" comes in the end due to its delay time, which is 
//greater than that of default js timing. So in this case "started js", then
//"End js", and then "data". This is asynchronous as line 9 runs before 
//line 6 as we delay it. If it is Synchronous, then line 1 then line 3 and then
//line 5 to 7 and in the "end js " comes which is line 0

//                    CALLBACK
//*********************code2************************

    // function printGreeting(msg, alertGreet){
    //     alertGreet(msg)
    // }
    // function alertGreet(msg){
    //     alert(msg)
    // }

    // printGreeting("Hello and Welcome", alertGreet)

//printGreeting function a callback function here. upon calling it, it calls
//another function alertGreet. we pass two parameters in printGreeting,
//one is msg and other is function(alertGreet) which takes that msg and alert
//with msg("Hello and Welcome")

//                        PROMISE
//************************code 3*********************
const anyFunction = () => {
    return (((Math.floor(Math.random()*10))%2) === 0) ? true:false
}

const resolveFunction = () => {console.log("success")}
const rejectFunction = () => {console.log("failure")}

//As promise is an asynchronous function, so it will run separately, while
//other parts of code will run normally without any disturbance
const result = new Promise((resolve, reject)=>{
    setTimeout(()=>(anyFunction() ? resolve(): reject()), 2000)
})
result.then(resolveFunction).catch(rejectFunction)
//then for successfull or resolve and catch for failur or reject

console.log("normal synchrnous 1");//these two lines run normally as promise is an asynchronous and they are synchronous, so they print immediately while promise take 2 sec to print just like api take time to fetch the data
console.log("normal synchronous 2"); 
