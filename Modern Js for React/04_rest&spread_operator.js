// Rest operator

const Arr=(...arg)=>{
    let sum=0;
    for(let i=0; i<arg.length; i++){
      sum+=arg[i];
    }
    console.log(sum)
  }
  Arr(...[1,2,3,4,5,6])


// Spread operator

let arr1=[1,2,3,4,5]
let arr2=[10,20, ...arr1]
arr1.push(100)
console.log(arr2)
console.log(arr1)

// let arr3=arr1.concat(arr2)
let arr3=[...arr1, ...arr2]
console.log(arr3)



// OBJECT
let obj1={
    name:"Anand",
    lname:"Vishwakarma"
}
let obj2={
    age:"24"
}
let obj3={...obj1, ...obj2}
console.log(obj3);