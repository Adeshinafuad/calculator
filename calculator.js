let firstNumber = prompt("Enter first number ");
let secondNumber = prompt("Enter second number");
let operator = prompt("Enter the operator(+,-,*,/)");

firstNumber= parseInt(firstNumber);
secondNumber= parseInt(secondNumber);

if (operator === "+") {
  alert(firstNumber + secondNumber);
} else if (operator === "-") {
  alert(firstNumber - secondNumber);
}
else if (operator === "*"){
    alert(firstNumber*secondNumber)
} else if (operator === "/"){
    alert(firstNumber/secondNumber)
}

else {
    alert("Invalid input")
}
