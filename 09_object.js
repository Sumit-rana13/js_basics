// object literal 
const mySym = Symbol("key1");

const JsUser = {
    name : "Sumit",
    "full name": "Sumit Rana",
    [mySym ]: "mykey1",
    age:23,
    locatoion: "selhi",
    email: "xyz@gmail.com"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser);
JsUser.email = "xyz@yahoo.com";
// console.log(JsUser);
Object.freeze(JsUser);
JsUser.email = "xyzgoogle.com";
// console.log(JsUser);



// ++++++++++++++++++  De-structing  +++++++++++++++++++++++++++

const course = {
    name : "js in hindi",
    price : "234",
    courseInstructor : "Sumit"
}
// console.log(course.courseInstructor);

// const {courseInstructor} = course;
// console.log(courseInstructor);

// const {courseInstructor : instructor} = course;
// console.log(instructor);


// ++++++++++++++++++ API  +++++++++++++++++++++++++++
//syntax

// {
//     "name" : "Sumit"
//     "price" : 123
// }
