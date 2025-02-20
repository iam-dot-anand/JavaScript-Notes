const arr=[10,20,30,40,50];

const result=arr.reduce((acm, item)=>{
  console.log(item)
  console.log(acm)
  return acm +1
  
},0)