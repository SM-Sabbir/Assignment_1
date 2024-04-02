 
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Fetch inputs
    let num1 = document.getElementById('firstInput').value;
    let num2 = document.getElementById('secondInput').value;
    let operation = document.getElementById('operation').value;

    // Remove existing messages
                                  
    removeMessage('error');
    removeMessage('result');

    // Validate inputs
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        showError("Please enter valid numbers.");
        return;
    }

    // Convert inputs to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

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

    // Display result
    showResult("Result: " + result);
});

function isValidNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function showError(message) {
    // Remove any existing result messages
    removeMessage('result');

    // Create error message element
    let errorMessage = document.createElement("div");
    errorMessage.className = "alert alert-danger mt-2";
    errorMessage.textContent = message;
    errorMessage.id = 'error';

    // Get parent element to insert error message before
    let form = document.getElementById('calculatorForm');
    form.parentNode.insertBefore(errorMessage, form.nextSibling);

    // Remove error message after 3 seconds
    setTimeout(function() {
        errorMessage.parentNode.removeChild(errorMessage);
    }, 3000);
}

function showResult(message) {
    // Remove any existing error messages
    removeMessage('error');

    // Create result message element
    let resultMessage = document.createElement("div");
    resultMessage.className = "alert alert-success mt-2";
    resultMessage.textContent = message;
    resultMessage.id = 'result';

    // Get parent element to insert result message before
    let form = document.getElementById('calculatorForm');
    form.parentNode.insertBefore(resultMessage, form.nextSibling);
}

function removeMessage(id) {
    let message = document.getElementById(id);
    if (message) {
        message.parentNode.removeChild(message);
    }
}
