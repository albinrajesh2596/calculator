// var num1=5;
// var num2=10;
// var result;

// add(num1,num2);
// sub(num1,num2);
// mul(num1,num2);
// div(num1,num2)


// function add(a,b)
// {
//    result=parseInt(a)+parseInt(b);
//    console.log(result)
// }
// function sub(a,b)
// {
//     result=a-b;
//     console.log(result)
// }
// function mul(a,b)
// {
//     result=a*b;
//     console.log(result)
// }
// function div(a,b)
// {
//     result=a/b;
//     console.log(result)
// }

// Control Statements
// 1) Condition
// if(); if() else; if() elseif()  elseif() else;

//    if(operator== '+'){
//     resultElement.value = numberOneElement.value + numberTwoElement.value  
//    }
//    else if(operator== '-'){
//     resultElement.value = numberOneElement.value - numberTwoElement.value
//    }
//    else if(operator== '*'){
//     resultElement.value = numberOneElement.value * numberTwoElement.value
//    }
//    else{
//     resultElement.value = numberOneElement.value / numberTwoElement.value
//    }

// if(currentNumber)
// {
//     alert('Am not empty');
// }
// else{
//     alert('Am empty');
// }

var numberElement = document.getElementById('number');
var resultElement = document.getElementById('number');
var operatorElement = document.getElementById('operator');
var number1 = '';
var number2 = '';
var currentNumber = '';
function getNumber(a) {
    currentNumber += a; 
    numberElement.value = currentNumber 
}
function getOperator(a) {
    operatorElement.value = a;
    currentNumber = ''
    number1=numberElement.value;
}
function results() {
    number2 =numberElement.value ;
    let operator=operatorElement.value;
   switch(operator)
   {
        case '+':
            resultElement.value = Number(number1) + Number(number2);
            break;
        case '-':
            resultElement.value = Number(number1) - Number(number2);
            break;
        case '*':
            resultElement.value = Number(number1) * Number(number2);
            break;
        default:
            resultElement.value = Number(number1) / Number(number2);
            break;
   }
}       