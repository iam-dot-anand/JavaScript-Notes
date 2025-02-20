const Arr=[10,20,30,40,50];

for(let i=0; i<Arr.length; i++){
  console.log(Arr[i]);
}

const newArr=Arr.map((item, index)=>{
  return `Item ${item*2} at index ${index}`
})
console.log(newArr)

const arrObj=[{
  fname:"Anand",
  lname:"Vishwakarma",
  age:"24"
  
},
{
  fname:"Ayush",
  lname:"Vishwakarma",
  age:"4"
  
},
{
  fname:"Piyush",
  lname:"Vishwakarma",
  age:"6"
  
},
{
  fname:"Krishna",
  lname:"Vishwakarma",
  age:"26"
  
}
]
let data=arrObj.map((item, i)=>{
  return `${item.fname} ${item.lname} age ${item.age}`
})
console.log(data);





