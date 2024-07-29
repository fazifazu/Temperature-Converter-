// scripts.js
document.getElementById('temp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let temperature = parseFloat(document.getElementById('temperature').value);
    let fromUnit = document.getElementById('from-unit').value;
    let toUnit = document.getElementById('to-unit').value;
    
    if (isNaN(temperature)) {
        alert("Please enter a valid number for temperature.");
        return;
    }
    
    let result;
    
    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === 'celsius') {
        result = convertFromCelsius(temperature, toUnit);
    } else if (fromUnit === 'fahrenheit') {
        result = convertFromFahrenheit(temperature, toUnit);
    } else if (fromUnit === 'kelvin') {
        result = convertFromKelvin(temperature, toUnit);
    }
    
    document.getElementById('result').innerHTML = `<div class="alert alert-success">Result: ${result.toFixed(2)} ${capitalizeFirstLetter(toUnit)}</div>`;
});

function convertFromCelsius(temp, toUnit) {
    switch (toUnit) {
        case 'fahrenheit':
            return (temp * 9/5) + 32;
        case 'kelvin':
            return temp + 273.15;
        default:
            return temp;
    }
}

function convertFromFahrenheit(temp, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return (temp - 32) * 5/9;
        case 'kelvin':
            return (temp - 32) * 5/9 + 273.15;
        default:
            return temp;
    }
}

function convertFromKelvin(temp, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return temp - 273.15;
        case 'fahrenheit':
            return (temp - 273.15) * 9/5 + 32;
        default:
            return temp;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
