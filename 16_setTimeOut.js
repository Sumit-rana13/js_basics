// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }
// }

// x();



// let is a Block Scope and its's create a new copy every time until loop is executed.  
// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }
// }

// x();




function x(){
    for(var i=1; i<=5; i++){
       function close(i){
        setTimeout(function(){
            console.log(i);
        },i*1000)
       }
       close(i)
    }
}

x();