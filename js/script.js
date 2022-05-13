//set variables
let weightBMI = document.querySelector("#weight");
let heightBMI = document.querySelector("#height");
let calculateBMI = document.querySelector("#calculate");
let yourBMI = document.querySelector("#yourBMI");
let resultBMI = document.querySelector("#result");
//calculation
calculateBMI.addEventListener('click', calBMI)
function calBMI(){
    if ( (weightBMI.value =="") || (heightBMI.value == "") ) alert("enter your weight and height");
    let x = weightBMI.value / ( heightBMI.value * heightBMI.value) * 10000;
    let y = x.toFixed(2)
    yourBMI.innerHTML = `Your BMI is : <span>${y}</span></span>`;
 
    if (y < 18.5 ) {
        resultBMI.innerHTML = "Under Weight";
        }else if(18.5 < y && y<= 24.9){
        resultBMI.innerHTML ="Normal Weight";
        }else if(25 < y && y < 29.9){
        resultBMI.innerHTML ="Over Weight";
        } else {
        resultBMI.innerHTML ="Obesity";
    }
}


