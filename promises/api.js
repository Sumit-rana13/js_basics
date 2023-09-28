// async function getMovies(){
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/albums")
//     const data =await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("error : ",error);
//    }
// }

// getMovies()




fetch("https://jsonplaceholder.typicode.com/albums")
.then(function(response){
    const data = response.json()
    return data
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))
.finally(()=> console.log("Promsise is resolve or rejected"))