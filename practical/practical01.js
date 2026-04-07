function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (celsius === '') {
    alert('Please enter a temperature in Celsius');
    return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerHTML = `<p class="result">Fahrenheit: <span class="result-value">${fahrenheit.toFixed(2)}</span></p>`;
}
