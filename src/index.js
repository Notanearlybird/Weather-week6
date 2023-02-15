let time = new Date();
console.log(time);
let today = time.getDay();
console.log(today);
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
let day = week[today];
console.log(day);
let hour = time.getHours();
let minute = time.getMinutes();
if (hour < 10) {
  hour = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}
let timeNow = `${hour}:${minute}`;
console.log(timeNow);

let date = `Today is ${day}, ${timeNow}`;
console.log(date);

function CtoF() {
  let tempValue = (document.querySelector("#temp").innerHTML = "63");
  console.log(tempValue);
}
let Fahrenheit = document.querySelector("#far");
Fahrenheit.addEventListener("click", CtoF);

function FtoC() {
  let tempValue = (document.querySelector("#temp").innerHTML = "17");
  console.log(tempValue);
}
let Celsius = document.querySelector("#cel");
Celsius.addEventListener("click", FtoC);
//
document.querySelector("#wind").innerHTML = "5 km/h";
document.querySelector("#humidity").innerHTML = "100%";
document.querySelector("#weatherdescript").innerHTML = "Sunny";
document.querySelector("#date").innerHTML = `${date}`;
document.querySelector("#city").innerHTML = "Paris";

function showCity(position) {
  let ApiKey = "29ed6c2e07ee4b1b2511b41b59e67e20";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${ApiKey}&units=metric`;
  axios.get(ApiUrl).then(displayWeather);
}
function search(city) {
  let ApiKey = "29ed6c2e07ee4b1b2511b41b59e67e20";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
  axios.get(ApiUrl).then(displayWeather);
}
search("London");

function displayWeather(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weatherdescript").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.main.wind
  );
  document.querySelector("#humidity").innerHTML = response.data.humidity;
}
//document.querySelector("#city").innerHTML = "Paris";
// console.log(position.coords.latitude);
// console.log(position.coords.longitude);

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCity);
}
let buttonHere = document.querySelector("#here");
buttonHere.addEventListener("click", getLocation);
//
function startSearch(event) {
  debugger;
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
  let h4 = document.querySelector("h4");
  h4.innerHTML = `Here is your weather forecast`;
}
console.log(startSearch);

let form = document.querySelector("#search-form");
form.addEventListener("submit", startSearch);

let buttonSearch = document.querySelector("#button1");
buttonSearch.addEventListener("click", startSearch);
