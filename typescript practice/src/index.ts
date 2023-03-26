console.log("hello");

let a = 56;// -> explicit
// or a : number = 56 -> implicit


a = 10;

function square (n: number){
    return n * n;  
}
console.log(square(2));

let b : number = 10;
// we cannot do this b = "string"

let c : any = 100;
c = "type change due to any";
//as due to any type, we can assign any type to variable c

console.log(c);

let d : true = true;
// d = false; -> gives an error as we assign true type, so it will only accept true

let e : 20 = 20;
// e = 30 or any number; -> gives an error as we assign 20 type, so it will only accept 20

let user : {firstName: string, lastName: string} = {
    firstName: "Muhammad Muneeb Waseem", 
    lastName: "Waseem"
}

// we can not add more key value pair or more properties in object user as we specify properties initially
console.log(user);

//creating our own type

type age = number;

let personAge : age = 55;

console.log(personAge);

type Person = {
    name : string,
    age : number,
    email? : string //optional property, as declare with ?
};

let human : Person = {
    name:"muneeb",
    age: 20,
    email:"@google.com"
}
console.log(human)

//array in typescript

let arry: number[] = [45, 100, 20];//we cannot pass boolean or string in it 
console.log(arry)
//or

/*let arr: number[]
  arr[0] = 32
  arr[1] = 100
  */

//tupple in typescript

//in tupple, we can define type for each index

let tup: [string, number, string] = ["karachi", 100, "Pakistan"];

console.log(tup);

//Enum in typeScritp 

/*enum language {
    English,
    Urdu,
    Maths
}
console.log(language.Urdu)*/

enum language {
    English=100,
    Urdu=250,
    Maths=300
}
console.log(language.Urdu)

//functions in typescript

//We only provide number type parameter
function addition (a: number, b:number) {
    return a + b;
}
console.log(addition(2, 5))

//here we also specify the return type, which is number
function addition1 (a: number, b:number): number{
    return a + b;
}
console.log(addition)

//creating function type, that can be used in any function

type Greet = (num1: number, num2:number) => number

//lets use this type in some function

let add2 : Greet = (num1 : number , num2 : number): number => {
    return num1 + num2

}
console.log(add2(10, 2));

//generic type
//we can use it with any type, can be number, string etc.

function personal<T> (a : T): T{
    return a;
}

console.log(personal<number>(10));
console.log(personal<String>("muneeb"));
