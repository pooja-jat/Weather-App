const btn = document.querySelector("button");

function fetchWeather() {
 
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=eed6b9357579403083e160411251802&q=${input.value}&aqi=yes`
  )
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("city").innerText = data.location.name;
      document.getElementById("temp").innerText =
        parseInt(data.current.temp_c) + `ºC`;
      document.getElementById("condition_text").innerText =
        data.current.condition.text;
      document.getElementById("wind_speed").innerText =
        data.current.wind_kph + ` kmph`;
      document.getElementById("wind_direction").innerText =
        data.current.wind_dir + ``;
      document.getElementById("co").innerText = data.current.air_quality.co;
      document.getElementById("no2").innerText = data.current.air_quality.no2;
      document.getElementById("o3").innerText = data.current.air_quality.o3;
      document.getElementById("so2").innerText = data.current.air_quality.so2;
    })
    .catch(() => {
      document.getElementById("city").innerText = "No matching location found";
      document.getElementById("temp").innerText = "";
    })
    .finally(() => {
      input.value = "";
      
    });
}

btn.addEventListener("click", fetchWeather);
