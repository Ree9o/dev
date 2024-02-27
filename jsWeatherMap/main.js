async function getWeather(code = "130010") {
  const currentDiv = document.getElementById("div1");
  currentDiv.innerHTML = "";
  const res = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${code}`);
  const json = await res.json();
  const cityName = json.location.area;
  const city = document.createElement("div");
  city.textContent = cityName;
  currentDiv.appendChild(city);

  json.forecasts.map((forecast) => {
    const forecastElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const date = document.createTextNode(forecast.date);
    const telop = document.createTextNode(forecast.telop);
    imageElement.src = forecast.image.url;
    forecastElement.appendChild(date);
    forecastElement.appendChild(telop);
    forecastElement.appendChild(imageElement);
    currentDiv.appendChild(forecastElement);
  });
}
getWeather();

document.getElementById("tokyo").addEventListener("click", () => {
  getWeather("130010");
});
document.getElementById("osaka").addEventListener("click", () => {
  getWeather("270000");
});
