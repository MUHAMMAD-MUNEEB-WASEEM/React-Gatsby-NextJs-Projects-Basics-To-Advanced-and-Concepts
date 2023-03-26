"use strict";
console.log("hello");
var a = 56; // -> explicit
// or a : number = 56 -> implicit
a = 10;
function square(n) {
    return n * n;
}
console.log(square(2));
var b = 10;
// we cannot do this b = "string"
var c = 100;
c = "type change due to any";
//as due to any type, we can assign any type to variable c
console.log(c);
var d = true;
// d = false; -> gives an error as we assign true type, so it will only accept true
var e = 20;
// e = 30 or any number; -> gives an error as we assign 20 type, so it will only accept 20
var user = {
    firstName: "Muhammad Muneeb Waseem",
    lastName: "Waseem"
};
// we can not add more key value pair or more properties in object user as we specify properties initially
console.log(user);
var personAge = 55;
console.log(personAge);
var human = {
    name: "muneeb",
    age: 20,
    email: "@google.com"
};
console.log(human);
//array in typescript
var arry = [45, 100, 20]; //we cannot pass boolean or string in it 
console.log(arry);
//or
/*let arr: number[]
  arr[0] = 32
  arr[1] = 100
  */
//tupple in typescript
//in tupple, we can define type for each index
var tup = ["karachi", 100, "Pakistan"];
console.log(tup);
//Enum in typeScritp 
/*enum language {
    English,
    Urdu,
    Maths
}
console.log(language.Urdu)*/
var language;
(function (language) {
    language[language["English"] = 100] = "English";
    language[language["Urdu"] = 250] = "Urdu";
    language[language["Maths"] = 300] = "Maths";
})(language || (language = {}));
console.log(language.Urdu);
//functions in typescript
//We only provide number type parameter
function addition(a, b) {
    return a + b;
}
console.log(addition(2, 5));
//here we also specify the return type, which is number
function addition1(a, b) {
    return a + b;
}
console.log(addition);
//lets use this type in some function
var add2 = function (num1, num2) {
    return num1 + num2;
};
console.log(add2(10, 2));
//generic type
function personal(a) {
    return a;
}
console.log(personal(10));
console.log(personal("muneeb"));
