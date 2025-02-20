// ES6 introduce new method to find item using find and findIndex

// find() is search item and return value 
// findIndex() is search item and return index 

const arr1=[-10,15,30,35,2,40];

let finditem=arr.find(item=>{
  return item%2===0 && item>=0
})
console.log(finditem)

// The find method stops iterating once it finds the first element that satisfies the condition. 
// Therefore, 10 is returned because it's the first even, non-negative number in the array.

const arr2=[-10,15,3,35,2,40];

let findIndex=arr.findIndex(item=>{
  return item%2===0 && item>=0
})
console.log(finditem)

