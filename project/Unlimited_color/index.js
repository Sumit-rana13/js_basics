//generate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(randomColor());
let stopInterval;
document.getElementById("start").addEventListener("click",function(){
    stopInterval = setInterval(function(){
        document.querySelector("body").style.backgroundColor = randomColor();
    },1000)
})

document.getElementById("stop").addEventListener("click",function(){
    clearInterval(stopInterval);
    stopInterval = null;
})