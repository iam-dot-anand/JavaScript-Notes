const arr = [1, 2, 3, 4, 5];

console.log(arr[2]);

// Methods
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
// push method are add element at end , pop method are remove element at end and both are update our original array.

arr.shift();
console.log(arr);
arr.unshift(12);
console.log(arr);
// unshift method are add element at front , shift method are remove element at front and both are update our original array.

console.log(arr.includes(5));  // give boolean value True;

const newArr=arr.join();
console.log(newArr);   // they convert into string


// SLICE AND SPLICE
console.log("A", arr);
const slice = arr.slice(1, 3);
console.log(slice);
console.log("B", arr);
const splice = arr.slice(1, 3);
console.log("C", arr);
console.log(splice);
console.log("D", arr);
/*  Output
    A [ 1, 2, 3, 4, 5 ]
    [ 2, 3 ]
    B [ 1, 2, 3, 4, 5 ]
    C [ 1, 2, 3, 4, 5 ]
    [ 2, 3 ]
    D [ 1, 2, 3, 4, 5 ]
    slice don't manipulate on original array but splice are manipulate our original aaray
*/

const marvel=["Ironman","Thor","Spiderman","Hulk"];
const dc=["Superman","Flash","Batman"];
// console.log(marvel.concat(dc)); //is good but not fine
//  we use spread operator rather then concat
console.log([...marvel, ...dc]); // this way is better

const num=[1,2,4,[0,9],5,6,[1,2,4,[6,46,3]]];
console.log(num.flat(2));