console.log("Anand");
const name="Anand";
const age=24;
// console.log("My name is " +{name}+ "and age is" +{age});    //--> Don't use 
console.log(`My name is ${name} and age is ${age}`);    // follow this way


const game="Racing Car  BMW";  //it is key value pair
console.log(game[0]);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.toLowerCase());
console.log(game.charAt(7));    

const newString=game.substring(0,6);
console.log(newString)
console.log(game.slice(1,4));
console.log(game.split(" "));
const text1="Hello";
const text2="World";
const text=text1.concat(" ",text2);
console.log(text);