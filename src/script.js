function displayWeather(response) {
  console.log(response.data);

  document.querySelector("#city-name").innerHTML = response.data.name;

  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#current-high").innerHTML = Math.round(
    response.data.main.temp_max
  );

  document.querySelector("#current-low").innerHTML = Math.round(
    response.data.main.temp_min
  );

  document.querySelector("#conditions").innerHTML =
    response.data.weather[0].main;

  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#humidity-percent").innerHTML = Math.round(
    response.data.main.humidity
  );
}

function search(event) {
  event.preventDefault();

  let apiKey = "4726177c3943f082f8fe6c090e6f2eab";

  let city = document.querySelector("#city-search").value;

  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q&${city}&units=imperial&appid=${apiKey}`; //what i had at first :/

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function displayCurrentWeather(response) {
  console.log(response.data);

  document.querySelector("#city-name").innerHTML = response.data.name;

  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#current-high").innerHTML = Math.round(
    response.data.main.temp_max
  );

  document.querySelector("#current-low").innerHTML = Math.round(
    response.data.main.temp_min
  );

  document.querySelector("#conditions").innerHTML =
    response.data.weather[0].main;

  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#humidity-percent").innerHTML = Math.round(
    response.data.main.humidity
  );
}

function currentLocationSearch(position) {
  let apiKey = "4726177c3943f082f8fe6c090e6f2eab";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayCurrentWeather);
}

function currentLocation(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(currentLocationSearch);
}

let locButton = document.querySelector("#current-location");
locButton.addEventListener("click", currentLocation);

let today = new Date();

let currentDate = document.querySelector(".current-time");
console.log(currentDate);

let date = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];

currentDate.innerHTML = `Updated: ${day}, ${hours}:${minutes}`;
