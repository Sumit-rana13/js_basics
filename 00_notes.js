// javascript is dynamic type language as we do not explicity mention the type of datatype.
// Primitive(call by value)
//       7 types: String , Number, Boolean, null , undefined, Symbol, BigInt
// Non-Primitive(call by Reference)
//       Array, Objects, Functions
//       All reference datatype is of object type  array->object , function -> function object , typeof object -> object

// Primitive datatype use Stack 
// Non-Primitive datatype use Heap



// ... rest operator is similar to ... spread operator

//  falsy value => false, 0, -0, BigInt 0n, null, undefined, NaN
// truthy value => "0", "false", " ", [], {} function(){}


// --------- Nullish Coalescing operator (??): null undefined
// use for null check safety


//-------- Terniary operator
// condtion ? true : false


//  break => it takes control out of loop/scope
//  continue => it just skip the current statement

/* forEach( function(){})  similar to forEach( ()=>{}) */


// div.setAttribute("title" , "generate_title")    //setAttribute directly write the new value ....take one round trip
 // div.innerText = "chai aur code"               //innerText first take the reference and then overwrite the value ....take 2 round trip


// by default bubbling  propagation is enable to disable this just change third parameter true      
// what is Garbage collector and removeEventListeners 

// functions -------------------
//  1. function Statement aka function Declartion
function a(){
    console.log("a called");
}


// 2.function Expression
var b = function(){
    console.log("b called");
}

// 3.Anonymous function
var c = ()=>{
    console.log("c printed");
}

// Named Function Expression
var b = function xyz(){

}

// First Class Function - ability used function like a value || passed function inside function as an argument || return function as a value
// First Class Citizens


// Arrow Function

// Higher Order Func -> A function which take another function as an input and return a function as an output
// and the  function which is pass inside the higher order function is known as Callback function which is called sometime in the program
// and this only possible because Function are first class citizens in JS