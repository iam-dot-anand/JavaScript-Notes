function user(){
    console.log("Anand Vishwakarma");
}
user();
// let data=user()
// console.log(data);  // give undefined

function user(a,b){
    return a+b;
}
let data=user(2,5);
console.log(data);

function useLogedIn(username){
    if(!username){
        return `Please fill data`;
    }
    else{
        return `${username} is loged-In`
    }
}
console.log(useLogedIn("Anand"));

const object={
    name:"Anand",
    age:"24"
}

function userDetails(data){
    return `Name is ${data.name} and her age is ${data.age}`;
}
console.log(userDetails(object));