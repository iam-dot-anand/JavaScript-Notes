// string to number
let name="Anand";
let num=Number(name);
console.log(typeof(num));  // o/p--> NaN type-> num



// number to string
let number=1234;
let str= String(number);
console.log(typeof(str)); // o/p--> 1234 type-> string


// boolen to number
let bol=true;
let n=Number(bol);
console.log(typeof(n)); // o/p--> 1 type-> number


// num to bol
let numb=0
let bool=Boolean(numb);
console.log(typeof(bool)); // o/p--> false type-> boolean


// str to bool 
let string="true";
let boolean=Boolean(string);
console.log(typeof(boolean)); // o/p--> true type-> boolean


// 1 => true; 0 => false
// "" => false; "anand" => true