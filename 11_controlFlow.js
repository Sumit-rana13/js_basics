// <, > <= , => , == , != , === , !==

//--------- if-else
//  const temperature = 40;
//  if(temperature === 40){
//     console.log("temperatue is 40 deg");
//  }
//  else{
//     console.log("temperature i sfreate than 50 deg");
//  }


// ------ &&  vs ||
// const userLoggedIn = true;
// const debitCard = true;
// const userLoggedInWithGmail = false;
// const userLoggedInWithPhone = true;

// if(userLoggedIn && debitCard){
//     console.log("user allowed for shoppping");
// }
// if(userLoggedInWithGmail || userLoggedInWithPhone){
//     console.log("user login successfully");
// }



// ----------Switch case
// const month = 1;
// switch(month){
//     case 1:
//         console.log("januaery");
//         break;
//     case 2:
//         console.log("february");    
//         break;
//     default:
//         console.log("default case");
// }



// --------- Nullish Coalescing operator (??): null undefined
// use for null check safety
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1= undefined ?? 15;

console.log(val1);




//-------- Terniary operator
// condtion ? true : false

