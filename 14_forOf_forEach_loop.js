//-------  for of 
const arr = [1,2,3,4,5,6]
for(let num of arr){
    // console.log(num);
}

const greeting = "Sumit"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
}



// ---------- map
let map = new Map();
map.set("In","India")
map.set("Us","United State")
map.set("Fr","France")
// console.log(map);
for(let key of map){
    // console.log(key);
}
for(let [key , value] of map){
    // console.log(key , ":-" ,value);
}



//---- object 
const course = {
    name : "js in hindi",
    price : "234",
}
// for(const [key , value] of course){              // object is not iterable by for of loop
//     console.log(key , ":-" ,value);
// }



const myObj = {
    js: "javaScript",
    cpp: "c++",
    rb: "ruby"
}
for(const key in myObj){
    console.log(myObj[key]);
}