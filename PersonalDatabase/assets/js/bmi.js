function calcBMI(weight, height){
    return parseInt((weight/(height*height)).toFixed(2))
}

function BMIValues(weight, height){
    let bmi = calcBMI(weight, height);
    if (bmi < 18.5){
        console.log("Under weight")
    }else if (bmi >= 18.5 && bmi<=24.9){
        console.log("Normal")
    } else if(bmi >= 25 && bmi<29.9){
        console.log("Over Weight")
    } else{
        console.log("Obese")
    }
}

let weight = parseFloat(prompt("Enter weight: "));
let height = parseFloat(prompt("Enter height: "));

console.log("BMI: " + calcBMI(weight, height));
BMIValues(weight, height);