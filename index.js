
// //document.getElementById("num1-el").textContent=n1
// //document.getElementById("num2-el").textContent=n2

// let sumEl=document.getElementById("sum-el")

// function add() {
//     let result= num1 + num2
//     sumEl.textContent = "Result: " + result
// }

// function subtract() {
//     let result= num1 - num2
//     sumEl.textContent = "Result: " + result
// }

// function multiply() {
//     let result= num1 * num2
//     sumEl.textContent = "Result: " + result
// }

// function divide() {
//     let result= num1 / num2
//     sumEl.textContent = "Result: " + result
// }
function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (num1 + num2);
}

function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (num1 - num2);
}

function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (num1 * num2);
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        document.getElementById("result").innerText = "Result: " + (num1 / num2);
    } else {
        document.getElementById("result").innerText = "Cannot divide by zero";
    }
}
