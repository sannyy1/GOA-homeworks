function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');
  
    if (temperatureInput === '') {
      resultDiv.textContent = 'გთხოვთ, შეიყვანოთ ტემპერატურა.';
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
    let result;
  
    if (unitSelect === 'celsiusToFahrenheit') {

        result = (temperature * 9/5) + 32;
      resultDiv.textContent = `${temperature} °C = ${result.toFixed(2)} °F`;
    } else if (unitSelect === 'fahrenheitToCelsius') {

        result = (temperature - 32) * 5/9;
      resultDiv.textContent = `${temperature} °F = ${result.toFixed(2)} °C`;
    }
  }
  