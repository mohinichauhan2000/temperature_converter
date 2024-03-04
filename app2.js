function convertTemperature() {
    var inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    var selectedUnit = document.getElementById("unitSelect").value;
    var resultElement = document.getElementById("result");
    
    if (!isNaN(inputTemperature)) {
        if (selectedUnit === "celsius") {
            var fahrenheit = (inputTemperature * 9/5) + 32;
            var kelvin = inputTemperature + 273.15;
            resultElement.innerHTML = inputTemperature + "°C = " + fahrenheit.toFixed(2) + "°F, " + kelvin.toFixed(2) + "K";
        } else if (selectedUnit === "fahrenheit") {
            var celsius = (inputTemperature - 32) * 5/9;
            var kelvin = (inputTemperature - 32) * 5/9 + 273.15;
            resultElement.innerHTML = inputTemperature + "°F = " + celsius.toFixed(2) + "°C, " + kelvin.toFixed(2) + "K";
        } else if (selectedUnit === "kelvin") {
            var celsius = inputTemperature - 273.15;
            var fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
            resultElement.innerHTML = inputTemperature + "K = " + celsius.toFixed(2) + "°C, " + fahrenheit.toFixed(2) + "°F";
        }
    } else {
        resultElement.innerHTML = "Please enter a valid temperature.";
    }
}
