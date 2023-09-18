
const form = document.querySelector("form");

form.addEventListener("submit" , function(e){
   e.preventDefault();
   console.log(e);
   const height =  parseInt(document.querySelector("#height").value)
   const weight =  parseInt(document.querySelector("#weight").value)
   const result = document.getElementById("results")
   
   if(height ==="" || height < 0 || isNaN(height)){
    result.innerHTML = `Please Enter the Correct height ${height}`
   }
   else if(weight ==="" || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please Enter the Coorect Weight ${weight}`
   }
   else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    result.innerHTML = `${bmi} BMI , `;
    result.innerHTML+= bmi < 18.6 ? "Under Weight" : bmi<24.9 ? "Normal Range" : bmi<30 ? "OverWeight" : "obesity"
   }
})