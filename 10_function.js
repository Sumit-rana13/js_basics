// function 

function addTwoNumber(num1, num2){
    return num1+num2;
    console.log("sumit"); 
}
// const sum = addTwoNumber(2,"3");
// const sum = addTwoNumber(2,"a");
const sum = addTwoNumber(2,3);
// console.log("sum:",sum);

/*

function loginUSer(username){
    // if(username === undefined) return similar to  if(!username)
    if(!username){
        return `please enter valid name`;
    }
    return `${username} just login`;
   
}
console.log(loginUSer("sumit"));
console.log(loginUSer(" "));
console.log(loginUSer());

*/


// ... rest operator is similar to ... spread operator
function calculateCartPrice(...val1){
    return val1;
}
// console.log(calculateCartPrice(100 ,200, 300));


// object use in function
const user ={
    name : "sumit",
    age : "23"
}
function userHandle(anyobject){
    console.log(`username ${anyobject.name} is ${anyobject.age} year old`);
}
// userHandle(user);
// userHandle({
//     name : "sam",
//     age :"25"
// })



// ++++++++++++
// function declaration
/*  Function hoisting only works with function declarations 
— not with function expressions. */
            // function square(num){
            //     return num * num;
            // }



// function expression
/* such a function is anonymous , it does not have  a name */
            // const square = function(num){
            //     return num * num;
            // }
            // console.log(square(4));





// function sum(){}            
// ()=>{}
// const sum = function(){}