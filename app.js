document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('cityInput');
    const searchBtn = document.getElementById('searchBtn');
    const weatherInfo = document.getElementById('weatherInfo');
  
    searchBtn.addEventListener('click', function() {
      const city = cityInput.value.trim();
      if (city !== '') {
        fetchWeather(city);
      }
    });
  
    function fetchWeather(city) {
      // Simulate fetching weather data (replace with actual API call)
      setTimeout(() => {
        const temperature = Math.floor(Math.random() * 30) + 10; // Random temperature between 10 and 39 degrees Celsius
        const description = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)]; // Random description
        const weather = `${description}, ${temperature}°C`;
  
        displayWeather(weather);
      }, 1000);
    }
  
    function displayWeather(weather) {
      weatherInfo.textContent = `Current Weather: ${weather}`;
  
      // Set font size and color directly on the weatherInfo element
      weatherInfo.style.fontSize = "40px"; 
      weatherInfo.style.color = "black"; 
    }
  });
  