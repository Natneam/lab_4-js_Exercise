// // variable Declaration
// var firstName;
// var lastName;
// var birthYear;
// var job;
// let isEligibleToVote;
// let numberOfFamilyMembers;
// let familyMembers = new Array();

// // receive input from user
// firstName = prompt("Your First Name: ");
// lastName = prompt("Your Last Name: ");
// job = prompt("Your Job: ");
// birthYear = parseInt(prompt("Your Birth Year: "));
// numberOfFamilyMembers = parseInt(prompt("Number of Family members: "));


// // checking eligibility
// if (calcAge(birthYear) < 18){ isEligibleToVote = false} else isEligibleToVote = true

// // taking family member numbers
// for (let i=0; i<numberOfFamilyMembers;i++){
//     familyMembers[i] = prompt("Enter One of your family Number("+ (i+1) + "): ")
// }

// console.log(familyMembers);

// familyMembers.forEach(
//     (familyMember, index) => {
//         console.log("Family member " + (index+1) + " " + familyMember);
//     }
// );

// function calcAge(birthYear){
//     return (new Date().getFullYear() - birthYear)
// }


// (
//     function(){
//         // displaying on the console
//         console.log("Here is your Profile ")
//         console.log("Name: " + firstName + " " + lastName)
//         console.log("Profession: " + job)
//         console.log("Age: " + calcAge(birthYear) + " years old")
//         console.log("Is Eligible to Vote : " + isEligibleToVote);
//     }
// )();

// let calcBMI = function (h,w) {
//     return w/(h*h)
// }


// Calculator

function add2(a,b){
    return a+b
}

function addMultiple(arr){
    sum = 0
    for(let i=0;i< arr.length;i++){
        sum += arr[i]
    }
    return sum
}

function sub(a,b){
    return a-b
}


function mult(a,b){
    return a*b
}

function multiplyMultiple(arr){
    let product = 1

    for(let i=0;i< arr.length;i++){
        product = product * arr[i]
    }
    return product
}

function div(a,b){
    return a/b
}

(function(){
    let a;
    let b;
    let service = parseInt(prompt("What you want to do today: \n 1: Add 2 numbers \n 2: add multiple numbers \n 3: Subtract \n 4: multiply 2 numbers \n 5: multiply multiple numbers \n 6: Divide 2 numbers:  "));
    switch (service) {
        case 1:
            alert(add2(parseInt(prompt("Enter first Number: ")),parseInt(prompt("Enter second Number: "))))
            break;
        case 2:
            let length = prompt("Enter the number of Numbers you want to add: ")
            array = new Array()
            for(let i=0; i<length; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            } 
            alert(addMultiple(array))
            break;
        case 3:
            alert(sub(parseInt(prompt("Enter first Number: ")) ,parseInt(prompt("Enter second Number: "))))
            break;
        case 4:
            alert(mult(parseInt(prompt("Enter first Number: ") ),parseInt(prompt("Enter second Number: "))))
            break;
        case 5:
            var nums = prompt("Enter the number of Numbers you want to multiply: ")
            array = new Array()
            for(let i=0; i<nums; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            }
            alert(multiplyMultiple(array))
            break;
        case 6:
            let a = prompt("Enter first Number: ") 
            let b = prompt("Enter second Number: ")
            if (b == 0){alert("Wrong input second number cannot be zero(0)")}
            else{
                alert(div(a,b))
            }
            break;
        default:
            alert("Invalid input")
            break;
    }

})();

// calculator ends here

// Banking system
// var accounts = [100, 346, 789, 435]

// function deposit(amount, accNum){
//     accounts[accNum] += amount
//     console.log("Deposited to : " + accNum + " Deposited Amount: " + amount + " total balance : " + accounts[accNum])
//     return true
// }

// function withdraw(amount, accNum){
//     if (amount < accounts[accNum]){
//         if(amount < 100){
//             accounts[accNum] -= amount
//             console.log("Withdrawn from : "+ accNum + " Withdrawn Amount: " + amount + " total balance : " + accounts[accNum])
//             return true
//         }else{
//             alert("you cannot withdraw more than $100")
//         }
//     } else{
//         alert("No enough Money to withdraw")
//     }
//     return false
// }

// function balance(accNum){
//     alert("Your Balance is " + accounts[accNum])
// }

// function transfer(from, to, amount){
//     if (withdraw(amount, from)){
//         deposit(amount, to)
//     }
// }

// (
//     function(){
//         service = parseInt(prompt("What do you want to do today: \n 1: Deposit \n 2: Withdraw \n 3: Inquire Balance \n 4: transfer"))
//         console.log(accounts)
//         switch (service) {
//             case 1:
//                 deposit(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
//                 break;
//             case 2:
//                 withdraw(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
//                 break;
//             case 3:
//                 balance(parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
//                 break;
//             case 4:
//                 transfer(parseInt(prompt("Enter account to debt from Number(between 0 and "+(accounts.length-1)+"): ")),parseInt(prompt("Enter account to deposit into Number(between 0 and "+(accounts.length-1)+"): ")), parseInt(prompt("Enter amount: ")));
//                 break;
//             default:
//                 alert("Invalid Input");
//                 break;
//         }
//     }
// )();