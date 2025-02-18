const btn = document.querySelector("button");

function fetchWeather() {
  const input = document.getElementById("input");
  btn.disabled = true;
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=eed6b9357579403083e160411251802&q=${input.value}&aqi=yes`
  )
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("city").innerText = data.location?.name;
      document.getElementById("temp").innerText = data.current.temp_c + `ºC`;
    })
    .catch(() => {
      document.getElementById("city").innerText = "No matching location found";
      document.getElementById("temp").innerText = "";
    })
    .finally(() => {
      input.value = "";
      btn.disabled = false;
    });
}

btn.addEventListener("click", fetchWeather);
