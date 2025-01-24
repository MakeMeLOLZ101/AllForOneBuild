const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sum = document.getElementById('sum');

fetch('/api/calculator/add', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        number1: parseFloat(num1),
        number2: parseFloat(num2)
    })
})
.then(response => response.json())
.then(data => {
    resultDiv.textContent = `Result: ${data.result}`;
})
.catch(error => {
    resultDiv.textContent = 'Error calculating';
});