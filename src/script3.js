let apiKey = "4726177c3943f082f8fe6c090e6f2eab";

function showTemperature(response) {
  console.log(response);
  let city = response.data.name;
  console.log(city);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&${city}&units=imperial&appid=${apiKey}`;
  let searchInput = document.querySelector("#city-search");
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = searchInput.value;
  axios.get(apiUrl).then(showTemperature);
}

function search(event) {
  event.preventDefault();
  // let searchInput = document.querySelector("#city-search");

  // let h1 = document.querySelector("#city-name");
  // h1.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//using below to create function: STILL NOT CLEAR TO ME RIGHT NOW...
// function formatDate(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();

//   if (hours < 10) {
//     hours = `0${hours}`;
//   }

//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }

//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let day = days[date.getDay()];

//   return `${day}, ${hours}:${minutes}`;
// }
// let today = document.querySelector(".current-time");
// let now = new Date();

// today.innerHTML = formatDate(date);

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

// function search(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#city-search");

//   let h1 = document.querySelector("#city-name");
//   h1.innerHTML = searchInput.value;
// }
// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", search);

// function temperatureChange(event) {
//   event.preventDefault();

//   let celsiusChange = document.querySelector("#currentCelsius");
//   celsiusChange.innerHTML = "79";
// }

// let fahrenheitTemp = document.querySelector("#fahrenheit");
// fahrenheitTemp.addEventListener("click", temperatureChange);

// function returnTemperature(event) {
//   event.preventDefault();

//   let fahrenheitChange = document.querySelector("#currentCelsius");
//   fahrenheitChange.innerHTML = "26";
// }

// let celsiusTemp = document.querySelector("#celsius");
// celsiusTemp.addEventListener("click", returnTemperature);

//other way, per Matt: - THEN he said NOT to do the math too! LOL! (Said so when introducing the homework, which is why i didn't even attempt the math in the first place)
// function convertToFahrenheit(event) {
//   event.preventDefault():
//   let temperatureElement = document.querySelector("#temperature"); //if my id in the celsius is named this
//   let temperature = temperatureElement.innerHTML;
//   temperature = Number(temperature);
//   temperatureElement.innerHTML = Math.round((temperature * 9) / 5 * 32);
// }

// function convertToCelsius(event) {
//   event.preventDefault():

//   temperature = Number(temperature);
//   temperatureElement.innerHTML = Math.round((temperature * 9) / 5 * 32);
// }

// let temperatureElement = document.querySelector("#temperature"); //if my id in the fahrenheit is named this
//   let celsiusTemperature = temperatureElement.innerHTML;
// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", convertToCelsius);
