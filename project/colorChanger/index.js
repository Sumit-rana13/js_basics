const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener("click" , (e)=>{
        console.log(e);
        console.log(e.target);
        // if(e.target.id === "green"){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "yellow"){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "blue"){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "red"){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "pink"){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "white"){
        //     body.style.backgroundColor = e.target.id
        // }
        





        const color = e.target.id
        console.log(color);
        switch(color){
            case "green":
                if(color === "green") body.style.backgroundColor = color;
                break;
            case "yellow":
                if(color === "yellow") body.style.backgroundColor = color;
                break;    
            case "blue":
                if(color === "blue") body.style.backgroundColor = color;
                break;    
            case "red":
                if(color === "red") body.style.backgroundColor = color;
                break;    
            case "pink":
                if(color === "pink") body.style.backgroundColor = color;
                break;    
            case "white":
                if(color === "white") body.style.backgroundColor = color;
                break;    
            default:
                `Sorry we are out of bound`
               
        }
    })
})