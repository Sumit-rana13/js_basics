// const promisesOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })
// promisesOne.then(function(){
//     console.log("Promise Consumed");
// })




// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async 2 completed");
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("promises Complete");
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name:"sumit" , age:23})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);

// })




// ----- syntax 1 ------------
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     let error = true;
//     if(!error){
//         resolve({name:"skash",hobby:"flirt"})
//     }else{
//         reject("Facing and error")
//     }
//     },1000)
// })

// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.name
// })
// .then((name)=>{
//     console.log(name);
// })
// .catch(function(error){
//     console.log(error);

// })
// .finally(()=> console.log("Promise is resolve or rejected"))



// ----- syntax 2  ----------
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name:"Abhi",hobby:"flirt"})
//         }else{
//             reject("Facing and error")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()



// --------------
// async function getAllUsers(){
//    try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts" )
//         const data = await response.json()
//         console.log(data);
//    } catch (error) {
//         console.log(error);
//    }
// }
// getAllUsers()




// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
//    return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))