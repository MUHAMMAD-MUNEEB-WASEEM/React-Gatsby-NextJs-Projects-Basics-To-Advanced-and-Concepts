//**************code 3************** */

function prepareFood(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("prepare food")
            resolve("Food is ready")
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

//This is like preparefood return promise. that promise contains either resolve or reject, in our case is 
//resolve, so we have to use then. that would be save in variable promise. now call promise.then on 
//preparefood.as promise prints "prepare food" and returns resolve, so this promise.then fist print 
//"prepare food" and function which we pass in parameter of promise.then goes into resolve of 
//prepareFood()goes resolve of the prepareFood() and prints 
//"food is ready callback=" and takes "food is ready" as value which we have already passed in resolve of
//the preparefood and in the end we return promise for prepareFrenchToast(), then again .then calls which has promise of frentToast() so it first print french toast is ready
//and then takes function which goes into the resolve of prepareFrenchToast, prints "frenchtoast is
// ready callback=" and takes "food is ready" as frenchtoast value and so on

let promise = prepareFood();
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