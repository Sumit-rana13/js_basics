// let score = "33"
// let score = 33
// let score = true
let score = "33abc";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" => 33
// "33ab" =>NaN
// 1 => true , 0 => false


let isLoginIn = 1;
let isLoginInBoolean = Boolean(isLoginIn);
console.log(typeof isLoginInBoolean);


let string = "33";
let stringToNumber = Number(string);
console.log(stringToNumber);