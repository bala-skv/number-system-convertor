function convert() {
    const inputNumber = document.getElementById('inputNumber').value;
    const fromSystem = document.getElementById('fromSystem').value;
    const toSystem = document.getElementById('toSystem').value;

    let result;

    // Convert input number to decimal first
    let decimalNumber;
    switch (fromSystem) {
        case 'decimal':
            decimalNumber = parseInt(inputNumber, 10);
            break;
        case 'binary':
            decimalNumber = parseInt(inputNumber, 2);
            break;
        case 'hexadecimal':
            decimalNumber = parseInt(inputNumber, 16);
            break;
        case 'octal':
            decimalNumber = parseInt(inputNumber, 8);
            break;
        default:
            result = "Invalid Input";
            break;
    }

    // Convert from decimal to the target number system
    switch (toSystem) {
        case 'decimal':
            result = decimalNumber.toString(10);
            break;
        case 'binary':
            result = decimalNumber.toString(2);
            break;
        case 'hexadecimal':
            result = decimalNumber.toString(16).toUpperCase();
            break;
        case 'octal':
            result = decimalNumber.toString(8);
            break;
        default:
            result = "Invalid Input";
            break;
    }

    // Display the result
    document.getElementById('result').textContent = result;
}
