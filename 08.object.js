const mysymb=Symbol("A");

const obj={
    name:"Anand",
    "full name":"Anand Vishwakarma",
    [mysymb]:"Key",
    age:"24",
    location:"Ghazipur",
    logedIn:"false",
}

// console.log(obj.name);
// console.log(obj["location"]);
// console.log(obj["full name"]);
// console.log(obj[mysymb]);

// obj.location="Varanasi";
// console.log(obj.location);
// Object.freeze(obj);  // freez the obj do not update furthur
// obj.location="Luckhnow";
// console.log(obj.location);

const user={
    email:"email@gmail.com",
    fullName: {
        userName:{
            firstName:"Anand",
            lastName:"Vishwakarma"
        }

    }
}
// console.log(user.fullName.userName.firstName);

const fruit={
    a:"apple",
    b:"banana",
    o:"orange"
}
const animal={
    l:"lion",
    e:"elephent",
    t:"tiger"
}
const fruitAnimal={...animal, ...fruit};
console.log(fruitAnimal);

// De-structure
const userDetails={
    firstName:"Anand",
    lastName:"Vishwakarma",
    location:"Ghazipur",
    course:"JavaScript"
}

const {firstName, lastName, location, course}=userDetails
console.log(firstName)
console.log(lastName)
console.log(location)
console.log(course)