//**************code 3************** */

function prepareFood(data){
    let promise = new Promise(function(resolve, reject){

        setTimeout(()=>{
            if (data!=2){
                console.log("prepare food")
                resolve("Food is ready")
            }
            else{
                reject("value not found")//now here what we did is we pass value to prepare food, and if that value=2, then reject runs, so catch part will run only
            }
        }, 1000)
    })
    return promise;
}
function prepareFrenchToast(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("prepare frenchtoast")
            resolve("frenchtoast is ready")
        }, 2000)
    })
    return promise;
}
function prepareCoffee(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("prepare coffee")
            resolve("coffee is ready")
        }, 3000)
    })
    return promise;
}


let promise = prepareFood(2);
promise.then(function(value){
    console.log("food is ready callback=", value);
    return prepareFrenchToast()
})
.then(function(frenchtoastvalue){
    console.log("frenchtoast is ready callback=", frenchtoastvalue);
    return prepareCoffee()
})
.then(function(coffeValue){
    console.log("coffee is ready callback=", coffeValue)
})
.catch(function(error){
    console.log("error is", error)
})