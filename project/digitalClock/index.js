const clock = document.querySelector(".box");

// let date = new Date()
// console.log(date);

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString(); 
},1000)