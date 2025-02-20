// In ES6introduced 2 new way to create variables

// const use to create a constant variable with constant value,
// the variable create using const cannot be update later
// e.g const URL = www.google.com


// let also use to create a variable but it is not constant
// the variable create using let can be update later
// e.g let name="Anand"
//     name="Vishwa_Anand"


let name="Anand"
console.log(name)
name="Vishwa_Anand"
console.log(name)
let num1=100
let isOdd=false
let marks=[10,20,30,40]
let obj={
    fname:"Anand",
    lname:"Vishwa"
}


const num=100;
console.log(num);
num=500;
// console.log(num);  get error bcz num is constant can not be update vale

var1=100
console.log(var1);
var var1=200
console.log(var1);