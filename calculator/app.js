
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
     

    //  inputs
    let num1 = document.getElementById('firstInput').value;
    let num2 = document.getElementById('secondInput').value;
    let operation = document.getElementById('operation').value;

 
    // Convert inputs to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        displayError('Please enter valid numbers.');
        return;
    }

    // Check for division by zero
    if (operation === "4" && num2 === 0) {
        displayError('Cannot divide by zero.');
        return;
    }

    // SWITCH  CASE
    let result;
    switch (operation) {
        case "1":
            result = num1 + num2;
            break;
        case "2":
            result = num1 - num2;
            break;
        case "3":
            result = num1 * num2;
            break;
        case "4":
            result = num1 / num2;
            break;
           
    }

    // // Display the result
    // document.getElementById('result').innerHTML = 'Result: ' + result;
    // document.getElementById('result').classList.add('alert', 'alert-success', 'mt-2')
showResult('Result is: ' + result);
});

function showResult(resultMessage) {
    let result = document.getElementById('result');
    result.innerHTML = resultMessage;
    result.classList.remove('alert-danger'); // Remove any existing error class
    result.classList.add('alert', 'alert-success', 'mt-2');
}

function displayError(errorMessage) {
    let error = document.getElementById('result');
    error.innerHTML = errorMessage;
    error.classList.remove('alert-success'); // Remove any existing success class
    error.classList.add('alert', 'alert-danger', 'mt-2');
}
    