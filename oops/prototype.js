let myHeroes = ["thor" ,"spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.sumit = function(){
    console.log(`Sumit is present`);
}
Array.prototype.HeySumit = function(){
    console.log(`Hey Sumit is present`);
}

// console.log(heroPower.sumit());
// console.log(myHeroes.sumit());

// console.log(myHeroes.HeySumit());
// console.log(heroPower.HeySumit());


// inheritance

