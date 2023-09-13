let str1 = "sumit"
let str2 = "rana"
//  console.log(str1 +" "+ str2);

// console.log("1" + 1);
// console.log(2 + "1");
// console.log("2"+ 2 + 2);
// console.log(2 + 2 + "2");


// +++++++++++++++++++ String ++++++++++++++++++++++++++++++++++

let name = "sumit";
let age = 23 ;
// console.log(`Hello my name is ${name} and my age is ${age}`);


let gameName = new String();
gameName = "hitesh";
// console.log(gameName[0]);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// ------trim()
let address = "   xyz   ";
console.log(address);
// console.log(address.trim());

//------replace()
let url = "https://%20hitesh.com//%20choudhry";
console.log(url.replaceAll("%20" , "-"));

// ------includes()
// console.log(url.includes("sumit"));


// ------split()
//  it return array 
let word = url.split("//")
console.log(word[0]);
console.log(word[1]);
console.log(word[2]);