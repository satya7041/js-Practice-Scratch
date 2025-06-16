// let current = '';
// let previous = '';
// let operator = null;

// const display = document.getElementById("display");

// function updateDisplay(value){
//     display.textContent = value;
// }

// function appendNumber(num){
//     current += num;
//     updateDisplay(current);
// }

// function chooseOperator(op){
//     if (current == "") return; 
//     if (previous!=='') {
//         calculate();
//     }
//     operator = op;
//     previous = current;
//     current = '';
// }

// function calculate(){
//     if(operator == null || current == "" || previous == "") return;

//     const a = parseFloat(previous);
//     const b = parseFloat(current);

//     let result;

//     switch (operator) {
//         case '+':
//             result = a+b;
//             break;
    
//         case '-':
//             result = a-b;
//             break;
    
//         case '*':
//             result = a*b;
//             break;
    
//         case '/':
//             result = b === 0 ? "Err": a/b;
//             break;
    
//    }

//     current = result.toString();
//     operator = null;
//     previous = "";
//     updateDisplay(current);
// }

// function clearDisplay(){
//     current = "";
//     previous = "";
//     operator = null;
//     updateDisplay(0);
// }

let current = '';
let previous = '';
let operator = null;

const display = document.getElementById("display");

function updateDisplay(num){
    display.textContent = num;
}

function appendNumber(num){
    current += num;
    updateDisplay(num)
}

function chooseOperator(op){
    if(current == "") return
    if(previous!==""){
        calculate();
    }
    operator = op;
    previous = current;
    current = '';
}

function calculate(){
    let result;
    const a = parseFloat(previous);
    const b = parseFloat(current);
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result =b/0? 'err': a / b;
            break;
    
        default:
            break;
    }
    current= result.toString();
    updateDisplay(current);
}

function clearDisplay(){
    previous='';
    operator= null;
    current = '';
    updateDisplay(0)
}

calculate()