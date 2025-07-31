// script.js
const apiKey = "d1cf55943b71f5265cb5534e2a82a294"; // Replace with your actual API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  result.innerHTML = "Loading...";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const name = data.name;
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;

    result.innerHTML = `
      <h2>${name}</h2>
      <p>Temperature: ${temp}°C</p>
      <p>Weather: ${weather}</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
    `;
  } catch (error) {
    result.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}
