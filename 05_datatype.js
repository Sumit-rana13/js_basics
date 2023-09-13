// Primitive(call by value)
//7 types: String , Number, Boolean, null , undefined, Symbol, BigInt

const score = 10;
const scoreValue = 10.4;

let name; //undefined

const id  = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);



// ------------------------------------------------

// Non-Primitive(call by Reference)
// Array, Objects, Functions

const arr = ["sumit" ,"samar", "hitesh"]

var obj = {
    name : "Sumit",
    age : 23
}

// const  myfunction = Function(){
//     console.log("Hello");
// }

// myfunction()




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Primitive datatype use Stack 
//  Non-Primitive datatype use Heap

let mychannel = "duckcom"
let anotherChannel = mychannel;

console.table([mychannel,anotherChannel]);



let userOne ={
    name :"Sumit",
    id : 123
}
let userTwo = userOne;
userOne.name ="Akash";  // by changing the value in userOne object userTwo object value also changed because
                        // in non-primtive type reference address is used .
console.log(userOne);
console.log(userTwo);
