let num1=10;
let num2=20;

// Normal funtion

function sumNum(num1,num2){
  return `${num1+num2}`
}
console.log(`${sumNum(num1,num2)}`)

// Arrow funtion

const Sum=(num1,num2)=>{
  return `Arrow funtion ${num1 + num2}`
}
console.log(`${Sum(50,50)}`)